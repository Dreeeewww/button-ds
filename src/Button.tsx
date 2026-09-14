import './Button.css';

export type ButtonVariant = 'primary' | 'secondary' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  /** Visual treatment. */
  variant?: ButtonVariant;
  /** Control size. */
  size?: ButtonSize;
  /** Disables interaction. */
  disabled?: boolean;
  /** Optional leading icon. */
  icon?: React.ReactNode;
  /** Label text. */
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  icon,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`btn btn--${variant} btn--${size}`}
      disabled={disabled}
      {...rest}
    >
      {icon ? (
        <span className="btn__icon" aria-hidden="true">
          {icon}
        </span>
      ) : null}
      <span className="btn__label">{children}</span>
    </button>
  );
}
