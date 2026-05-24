import { ButtonHTMLAttributes, ReactNode } from 'react';

type PublicAuthSecondaryButtonProps = {
  loading?: boolean;
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function PublicAuthSecondaryButton({
  loading = false,
  children,
  disabled,
  ...buttonProps
}: PublicAuthSecondaryButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <button
      {...buttonProps}
      type={buttonProps.type ?? 'button'}
      disabled={isDisabled}
      style={{
        width: '100%',
        border: '1px solid #cbd5e1',
        borderRadius: 14,
        background: '#ffffff',
        color: '#0f172a',
        padding: '12px 14px',
        fontSize: 15,
        fontWeight: 800,
        cursor: isDisabled ? 'wait' : 'pointer',
        opacity: isDisabled ? 0.72 : 1,
        boxShadow: '0 10px 24px rgba(15, 23, 42, 0.06)',
        ...buttonProps.style,
      }}
    >
      {children}
    </button>
  );
}