import { PublicAuthFeatureList } from './PublicAuthFeatureList';

type PublicAuthIntroFeature = {
  title: string;
  text: string;
};

type PublicAuthIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  features: PublicAuthIntroFeature[];
};

export function PublicAuthIntro({
  eyebrow,
  title,
  description,
  features,
}: PublicAuthIntroProps) {
  return (
    <aside>
      <p
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          margin: '0 0 20px',
          border: '1px solid #c7d2fe',
          background: 'rgba(255, 255, 255, 0.72)',
          color: '#3730a3',
          borderRadius: 999,
          padding: '8px 12px',
          fontSize: 13,
          fontWeight: 700,
        }}
      >
        {eyebrow}
      </p>

      <h1
        className="sf-auth-title"
        style={{
          margin: 0,
          maxWidth: 620,
          fontSize: 56,
          lineHeight: 1,
          letterSpacing: '-0.06em',
        }}
      >
        {title}
      </h1>

      <p
        style={{
          margin: '22px 0 0',
          maxWidth: 560,
          color: '#475569',
          fontSize: 18,
          lineHeight: 1.7,
        }}
      >
        {description}
      </p>

      <PublicAuthFeatureList items={features} />
    </aside>
  );
}