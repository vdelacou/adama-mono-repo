import type { StorybookConfig } from '@storybook/react-vite';
import path from 'node:path';

const config: StorybookConfig = {
  stories: ["../stories/**/*.stories.tsx"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  async viteFinal(config) {
    // customize the Vite config here
    return {
      ...config,
      define: { 'process.env': {} },
      resolve: {
        alias: [
          {
          find: "@adama/components-app-ui",
          replacement: path.resolve(__dirname, "../../../packages/adama-components/app-ui")
          },
          {
            find: "@adama/components-landing-page-ui",
            replacement: path.resolve(__dirname, "../../../packages/adama-components/landing-page-ui")
          }
        ]
      }
    };
  },
  docs: {
    autodocs: true
  },
  staticDirs: ['../public'],
};

export default config;