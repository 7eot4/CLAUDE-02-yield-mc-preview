'use client';

import { useState } from 'react';

export function CopyIpButton({ serverIp }: { serverIp: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(serverIp);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API can be unavailable (insecure context, permissions) -
      // fail silently rather than throw in front of the player.
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="btn-secondary gap-2"
      aria-label={`Copy server address ${serverIp}`}
    >
      <span className="font-mono text-sm">{serverIp}</span>
      <span className="text-yield-text-dim">{copied ? 'Copied!' : 'Copy IP'}</span>
    </button>
  );
}
