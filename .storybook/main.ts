// .storybook/main.ts
import type { StorybookConfig } from '@storybook/react-vite';

const config = {
  stories: ['../src/**/*.{stories,mdx}'],
  addons: [
    '@chromatic-com/storybook', // 使っているなら継続
    '@storybook/addon-docs',
    '@storybook/addon-a11y',    // a11y チェック用
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
} satisfies StorybookConfig;

export default config;
