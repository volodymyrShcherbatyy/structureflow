'use client';

import Link from 'next/link';

export function PublicBrandLink() {
  return (
    <Link
      href="/"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10,
        color: '#0f172a',
        textDecoration: 'none',
        fontWeight: 800,
        letterSpacing: '-0.03em',
        fontSize: 22,
      }}
    >
      <span
        style={{
          width: 34,
          height: 34,
          borderRadius: 12,
          display: 'grid',
          placeItems: 'center',
          background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
          color: '#fff',
          boxShadow: '0 12px 30px rgba(37, 99, 235, 0.28)',
        }}
      >
        S
      </span>
      StructureFlow
    </Link>
  );
}