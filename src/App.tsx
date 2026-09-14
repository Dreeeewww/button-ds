import '../build/tokens.css';
import { Button } from './Button';
import type { ButtonVariant, ButtonSize } from './Button';
import { Plus } from './icons/Plus';

const variants: ButtonVariant[] = ['primary', 'secondary', 'danger'];
const sizes: ButtonSize[] = ['sm', 'md', 'lg'];

export default function App() {
  return (
    <main
      style={{
        background: 'var(--color-surface-default)',
        color: 'var(--color-text-primary)',
        fontFamily: 'var(--font-family-mono), monospace',
        padding: '32px',
        minHeight: '100vh',
      }}
    >
      <h1 style={{ fontSize: '20px' }}>Button</h1>

      {sizes.map((size) => (
        <section key={size} style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '14px', opacity: 0.6 }}>{size}</h2>

          <div
            style={{
              display: 'flex',
              gap: '12px',
              alignItems: 'center',
              marginBottom: '12px',
            }}
          >
            {variants.map((variant) => (
              <Button key={variant} variant={variant} size={size}>
                Button
              </Button>
            ))}
            {variants.map((variant) => (
              <Button key={`${variant}-d`} variant={variant} size={size} disabled>
                Button
              </Button>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            {variants.map((variant) => (
              <Button
                key={`${variant}-i`}
                variant={variant}
                size={size}
                icon={<Plus />}
              >
                Button
              </Button>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
