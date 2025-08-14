// tailwind.config.ts
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{ts,tsx,mdx}', './.storybook/**/*.{ts,tsx}'],
  theme: { extend: {} },
  plugins: [],
} satisfies Config;