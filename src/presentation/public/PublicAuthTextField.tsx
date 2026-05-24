import { InputHTMLAttributes } from 'react';

type PublicAuthTextFieldProps = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

export function PublicAuthTextField({
  label,
  ...inputProps
}: PublicAuthTextFieldProps) {
  return (
    <label
      style={{
        display: 'grid',
        gap: 6,
        color: '#334155',
        fontSize: 13,
        fontWeight: 700,
      }}
    >
      {label}
      <input
        {...inputProps}
        style={{
          border: '1px solid #cbd5e1',
          borderRadius: 12,
          padding: '12px 14px',
          fontSize: 15,
          outline: 'none',
          background: '#fff',
          color: '#0f172a',
          ...inputProps.style,
        }}
      />
    </label>
  );
}