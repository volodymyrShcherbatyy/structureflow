import Link from 'next/link';

type PublicAuthFooterLinkProps = {
  text: string;
  href: string;
  linkLabel: string;
};

export function PublicAuthFooterLink({
  text,
  href,
  linkLabel,
}: PublicAuthFooterLinkProps) {
  return (
    <p
      style={{
        margin: '20px 0 0',
        color: '#64748b',
        fontSize: 14,
        textAlign: 'center',
      }}
    >
      {text}{' '}
      <Link
        href={href}
        style={{
          color: '#2563eb',
          fontWeight: 800,
          textDecoration: 'none',
        }}
      >
        {linkLabel}
      </Link>
    </p>
  );
}