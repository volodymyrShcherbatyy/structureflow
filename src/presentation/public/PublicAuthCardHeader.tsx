type PublicAuthCardHeaderProps = {
  title: string;
  description: string;
};

export function PublicAuthCardHeader({
  title,
  description,
}: PublicAuthCardHeaderProps) {
  return (
    <div style={{ marginBottom: 22 }}>
      <h2
        style={{
          margin: 0,
          fontSize: 28,
          letterSpacing: '-0.04em',
        }}
      >
        {title}
      </h2>

      <p
        style={{
          margin: '8px 0 0',
          color: '#64748b',
          fontSize: 14,
          lineHeight: 1.5,
        }}
      >
        {description}
      </p>
    </div>
  );
}