// src/components/Button/shared/types.ts
import type { ButtonHTMLAttributes, ReactNode } from 'react';

export type BaseButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  className?: string;
};