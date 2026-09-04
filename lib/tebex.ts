/**
 * Thin client for Tebex's public Headless API
 * (https://docs.tebex.io/developers/headless-api/overview) - the storefront
 * API meant specifically for custom-built stores like this one, distinct
 * from Tebex's lower-level Checkout API (which needs prior compliance
 * approval and isn't what this file talks to).
 *
 * Every call here uses only the store's *public* webstore token (safe to
 * ship in client-side JS, hence NEXT_PUBLIC_TEBEX_WEBSTORE_TOKEN) - no
 * secret key is needed for browsing packages or building a basket. A secret
 * key only comes into play server-side, for verifying Tebex's payment
 * webhooks - see docs/MONETIZATION.md's "Automatic delivery" section for
 * that architecture (not implemented in this static-exportable website;
 * a webhook receiver needs a real server, see that doc for why).
 *
 * Verified against the real API before writing this: a GET to
 * https://headless.tebex.io/api/accounts/<any-token> returns a structured
 * 404 ("Invalid account identifier provided") rather than a generic
 * network error, confirming this base URL is live and correct.
 */

const BASE_URL = 'https://headless.tebex.io/api/accounts';

export interface TebexWebstore {
  id: number;
  name: string;
  webstore_url: string;
  currency: { iso_4217: string; symbol: string };
  logo: string | null;
}

export interface TebexPackage {
  id: number;
  name: string;
  description: string;
  image: string | null;
  type: 'single' | 'subscription';
  category: { id: number; name: string };
  total_price: number;
  currency: string;
}

export interface TebexCategory {
  id: number;
  name: string;
  packages?: TebexPackage[];
}

export interface TebexBasket {
  ident: string;
  links: { checkout?: string };
}

function accountUrl(token: string, path = ''): string {
  return `${BASE_URL}/${encodeURIComponent(token)}${path}`;
}

async function tebexFetch<T>(url: string, init?: RequestInit): Promise<T> {
  const res = await fetch(url, {
    ...init,
    headers: { 'Content-Type': 'application/json', ...init?.headers },
  });
  if (!res.ok) {
    const body = await res.text().catch(() => '');
    throw new Error(`Tebex API ${res.status}: ${body || res.statusText}`);
  }
  const json = await res.json();
  return (json.data ?? json) as T;
}

export function getWebstore(token: string): Promise<TebexWebstore> {
  return tebexFetch(accountUrl(token));
}

export function getCategories(token: string, includePackages = true): Promise<TebexCategory[]> {
  return tebexFetch(accountUrl(token, `/categories${includePackages ? '?includePackages=1' : ''}`));
}

/**
 * Creates a basket and immediately returns its checkout link. `completeUrl`/
 * `cancelUrl` are where Tebex sends the player back to after payment -
 * typically this site's own /store (with a success/cancelled query param).
 */
export async function createBasket(token: string, completeUrl: string, cancelUrl: string): Promise<TebexBasket> {
  return tebexFetch(accountUrl(token, '/baskets'), {
    method: 'POST',
    body: JSON.stringify({
      complete_url: completeUrl,
      cancel_url: cancelUrl,
      complete_auto_redirect: true,
    }),
  });
}

export async function addPackageToBasket(token: string, basketIdent: string, packageId: number, quantity = 1): Promise<TebexBasket> {
  return tebexFetch(accountUrl(token, `/baskets/${encodeURIComponent(basketIdent)}/packages`), {
    method: 'POST',
    body: JSON.stringify({ package_id: packageId, quantity }),
  });
}

/** One-shot helper: create a basket, add one package, return the checkout URL to redirect the player to. */
export async function buyPackage(token: string, packageId: number, completeUrl: string, cancelUrl: string): Promise<string> {
  const basket = await createBasket(token, completeUrl, cancelUrl);
  const updated = await addPackageToBasket(token, basket.ident, packageId);
  const checkoutUrl = updated.links.checkout;
  if (!checkoutUrl) {
    throw new Error('Tebex did not return a checkout link for this basket.');
  }
  return checkoutUrl;
}
