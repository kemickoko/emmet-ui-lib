import type { Preview } from '@storybook/react-vite';
import '../src/index.css';

const preview: Preview = {
  parameters: { actions: { argTypesRegex: '^on.*' } },
};
export default preview;