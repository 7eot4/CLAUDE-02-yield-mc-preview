export function PageHero({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <div className="container-page py-16 sm:py-20">
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-yield-green">{eyebrow}</p>
      )}
      <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
      {description && <p className="mt-4 max-w-2xl text-lg text-yield-text-dim">{description}</p>}
    </div>
  );
}
