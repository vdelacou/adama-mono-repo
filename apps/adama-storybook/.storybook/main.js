const path = require("path");
module.exports = {
  stories: ["../stories/**/*.stories.mdx", "../stories/**/*.stories.tsx"],
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
        alias: [{
          find: "@adama/components-app-ui",
          replacement: path.resolve(__dirname, "../../../packages/adama-components/app-ui")
        }]
      }
    };
  },
  docs: {
    autodocs: true
  }
};