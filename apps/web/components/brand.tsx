import Link from "next/link";

type BrandProps = {
  compact?: boolean;
};

export function Brand({ compact = false }: BrandProps) {
  return (
    <Link className="brand" href="/" aria-label="TCC Flow, página inicial">
      <span className="brand-mark" aria-hidden="true">
        TF
      </span>
      {!compact && (
        <span className="brand-copy">
          <strong>TCC Flow</strong>
          <small>Do tema à banca</small>
        </span>
      )}
    </Link>
  );
}
