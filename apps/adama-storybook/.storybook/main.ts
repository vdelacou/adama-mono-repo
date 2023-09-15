import type { StorybookConfig } from '@storybook/react-vite';
import path from 'node:path';
import { dirname, join } from "path";

const config: StorybookConfig = {
  stories: ["../stories/**/*.stories.tsx"],
  addons: [getAbsolutePath("@storybook/addon-links"), getAbsolutePath("@storybook/addon-essentials")],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
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
    autodocs: true,
  },
  staticDirs: ['../public'],
};

export default config;

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}