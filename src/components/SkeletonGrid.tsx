// SPDX-License-Identifier: MIT
// Previously published in CaseBridge 1.1.0; see LICENSES/MIT-legacy.txt.
export function SkeletonGrid({ count = 6 }: { count?: number }) {
  return (
    <div className="grid" aria-hidden>
      {Array.from({ length: count }, (_, index) => (
        <article key={index} className="card skeleton-card">
          <div className="skeleton-line skeleton-line--title" />
          <div className="skeleton-chips"><div className="skeleton-line" /><div className="skeleton-line" /></div>
          <div className="skeleton-line" />
          <div className="skeleton-line skeleton-line--short" />
          <div className="skeleton-footer"><span /><span /><span /><div className="skeleton-line skeleton-line--short" /></div>
        </article>
      ))}
    </div>
  );
}
