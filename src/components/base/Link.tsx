import type { LinkProps } from 'next/link';
import Link from 'next/link';
import { clsx } from 'clsx';
import { CSSProperties, ReactNode } from 'react';

export interface ExternalLinkProps {
  children?: ReactNode;
  className?: string | null;
  href: string;
  target?: string;
}

export function ExternalLink({
  children = null,
  className = null,
  href,
  target,
}: ExternalLinkProps) {
  return (
    <a
      className={clsx(className, 'underline hover:underline')}
      href={href}
      rel="noopener noreferrer"
      target={target}
    >
      {children}
    </a>
  );
}

export interface NextLinkProps extends LinkProps {
  children?: ReactNode;
  className?: string | null;
  current?: boolean;
  style?: CSSProperties;
}

export function NextLink({
  children = null,
  className = null,
  current = false,
  ...nextLinkProps
}: NextLinkProps) {
  return (
    <Link
      className={clsx(className, 'hover:underline', { 'font-bold': current })}
      {...nextLinkProps}
    >
      {children}
    </Link>
  );
}
