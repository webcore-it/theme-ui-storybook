const path = require("path");

// Location of root node_modules
const modulesDir = path.join(__dirname, '../node_modules');

// As long Storybook depends on emotion 10.
const emotion10Aliases = (config) => ({
  ...config,
  resolve: {
    ...config.resolve,
    alias: {
      ...config.resolve.alias,
      '@emotion/core': path.join(modulesDir, '@emotion/react'),
      '@emotion/styled': path.join(modulesDir, '@emotion/styled'),
      '@emotion/styled-base': path.join(modulesDir, '@emotion/styled'),
      'emotion-theming': path.join(modulesDir, '@emotion/react'),
    },
  },
});


module.exports = {
  stories: [
    '../src/**/*.stories.@(ts|tsx)',
  ],
  addons: [],
  webpackFinal: emotion10Aliases,
};
