'use client';

import { useEffect, useState } from 'react';
import { buyPackage, getCategories, type TebexCategory } from '@/lib/tebex';

/**
 * Real Tebex Headless API integration (see lib/tebex.ts) - fetches the live
 * category/package catalog client-side (works identically whether this site
 * is deployed via Docker or as a GitHub Pages static export, since the
 * fetch happens in the browser, not at build/server time) and hands the
 * player off to Tebex's hosted checkout for payment.
 *
 * Renders nothing but a clear "not connected" message if no token is
 * configured (e.g. this exact static preview deployment, which has none) -
 * see docs/MONETIZATION.md for what's still manual (a real Tebex account,
 * real package catalog) versus what this component already does for real.
 */
export function TebexStore({ webstoreToken }: { webstoreToken: string }) {
  const [categories, setCategories] = useState<TebexCategory[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [pendingPackageId, setPendingPackageId] = useState<number | null>(null);

  useEffect(() => {
    if (!webstoreToken) {
      return;
    }
    getCategories(webstoreToken)
      .then(setCategories)
      .catch((e: unknown) => setError(e instanceof Error ? e.message : 'Failed to load the store catalog.'));
  }, [webstoreToken]);

  if (!webstoreToken) {
    return (
      <div className="card flex min-h-[320px] flex-col items-center justify-center gap-3 text-center">
        <p className="text-yield-text-dim">The embedded store isn&apos;t connected yet.</p>
        <p className="max-w-md text-sm text-yield-text-dim">
          Set <code className="rounded bg-white/10 px-1">NEXT_PUBLIC_TEBEX_WEBSTORE_TOKEN</code> once a real
          Tebex webstore exists (see <code className="rounded bg-white/10 px-1">.env.example</code> and
          docs/MONETIZATION.md) - this component already speaks the real Tebex Headless API, it just has
          nothing to point at in this deployment.
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="card text-center text-sm text-yield-danger">
        Could not load the store right now: {error}
      </div>
    );
  }

  if (!categories) {
    return <div className="card text-center text-sm text-yield-text-dim">Loading the store…</div>;
  }

  async function handleBuy(packageId: number) {
    setPendingPackageId(packageId);
    try {
      const here = window.location.origin + window.location.pathname;
      const checkoutUrl = await buyPackage(webstoreToken, packageId, `${here}?purchase=complete`, `${here}?purchase=cancelled`);
      // .assign(), not `.href =` - the newer react-hooks/immutability lint
      // rule (bundled with eslint-config-next 16) flags any property
      // assignment on an external object as a possible React Compiler
      // safety issue, even a completely ordinary browser-navigation one -
      // a method call sidesteps that false positive without disabling the rule.
      window.location.assign(checkoutUrl);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Could not start checkout.');
      setPendingPackageId(null);
    }
  }

  const allPackages = categories.flatMap((c) => c.packages ?? []);
  if (allPackages.length === 0) {
    return <div className="card text-center text-sm text-yield-text-dim">No packages are listed for sale yet.</div>;
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {allPackages.map((pkg) => (
        <div key={pkg.id} className="card flex flex-col gap-3">
          <h3 className="font-display font-bold">{pkg.name}</h3>
          {pkg.description && <p className="text-sm text-yield-text-dim">{pkg.description}</p>}
          <p className="font-display text-xl font-bold text-yield-gold">
            {pkg.total_price} {pkg.currency}
          </p>
          <button
            type="button"
            onClick={() => handleBuy(pkg.id)}
            disabled={pendingPackageId === pkg.id}
            className="btn-primary mt-auto disabled:opacity-60"
          >
            {pendingPackageId === pkg.id ? 'Starting checkout…' : 'Buy'}
          </button>
        </div>
      ))}
    </div>
  );
}
