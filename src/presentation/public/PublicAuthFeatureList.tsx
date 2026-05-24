type PublicAuthFeature = {
  title: string;
  text: string;
};

type PublicAuthFeatureListProps = {
  items: PublicAuthFeature[];
};

export function PublicAuthFeatureList({ items }: PublicAuthFeatureListProps) {
  return (
    <div
      style={{
        display: 'grid',
        gap: 14,
        marginTop: 34,
        maxWidth: 560,
      }}
    >
      {items.map((item) => (
        <div
          key={item.title}
          style={{
            display: 'grid',
            gridTemplateColumns: '36px 1fr',
            gap: 12,
            alignItems: 'start',
          }}
        >
          <span
            style={{
              width: 36,
              height: 36,
              borderRadius: 12,
              background: '#eef2ff',
              color: '#4f46e5',
              display: 'grid',
              placeItems: 'center',
              fontWeight: 900,
            }}
          >
            ✓
          </span>

          <span>
            <strong style={{ display: 'block', marginBottom: 4 }}>
              {item.title}
            </strong>
            <span
              style={{
                color: '#64748b',
                fontSize: 14,
                lineHeight: 1.5,
              }}
            >
              {item.text}
            </span>
          </span>
        </div>
      ))}
    </div>
  );
}