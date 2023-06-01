module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-adama`
  extends: ["adama"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
