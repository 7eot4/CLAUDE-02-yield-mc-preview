export function DraftLegalBanner() {
  return (
    <div
      role="alert"
      className="mb-8 rounded-lg border border-yield-danger/40 bg-yield-danger/10 px-4 py-3 text-sm text-yield-text"
    >
      <strong className="text-yield-danger">DRAFT — requires professional legal review</strong>
      <span className="text-yield-text-dim"> before this page is treated as a real, binding policy. See docs/LAUNCH-CHECKLIST.md.</span>
    </div>
  );
}
