import type { ReactNode } from 'react';

interface IconBadgeProps {
  children: ReactNode;
  size?: 'sm' | 'md';
}

export function IconBadge({ children, size = 'md' }: IconBadgeProps) {
  const sizeClass = size === 'sm' ? 'w-7 h-7' : 'w-8 h-8';

  return (
    <div
      className={`${sizeClass} grid place-items-center rounded-lg`}
      style={{
        background: 'rgba(77,212,182,0.18)',
        border: '1px solid rgba(77,212,182,0.46)',
        boxShadow: '0 8px 18px rgba(77,212,182,0.32)',
      }}
      aria-hidden="true">
      {children}
    </div>
  );
}
