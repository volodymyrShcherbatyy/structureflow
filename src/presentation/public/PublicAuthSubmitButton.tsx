import { ButtonHTMLAttributes, ReactNode } from 'react';

type PublicAuthSubmitButtonProps = {
  loading?: boolean;
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function PublicAuthSubmitButton({
  loading = false,
  children,
  disabled,
  ...buttonProps
}: PublicAuthSubmitButtonProps) {
  return (
    <button
      {...buttonProps}
      type={buttonProps.type ?? 'submit'}
      disabled={disabled || loading}
      style={{
        marginTop: 4,
        border: 'none',
        borderRadius: 14,
        background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
        color: '#fff',
        padding: '13px 18px',
        fontSize: 15,
        fontWeight: 800,
        cursor: disabled || loading ? 'wait' : 'pointer',
        opacity: disabled || loading ? 0.76 : 1,
        boxShadow: '0 18px 34px rgba(37, 99, 235, 0.28)',
        ...buttonProps.style,
      }}
    >
      {children}
    </button>
  );
}