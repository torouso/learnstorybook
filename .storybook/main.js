const path = require('path');

module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
    '@storybook/preset-ant-design',
    /* {
      name: '@storybook/preset-ant-design',
      options: {
        lessOptions: {
          modifyVars: {
            'primary-color': '#1DA57A',
            'border-radius-base': '2px',
          },
        },
      },
    }, */
  ],
  framework: "@storybook/react",
  core: "@storybook/builder-vite", 

  /*   viteFinal: (config) => {
      config.plugins = [
        ...config.plugins,
        require('@preact/preset-vite').default()
      ]
      return config
    } */
  viteFinal: async (config, { configType }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, "../src"),
    };
    return config;
  }
  /*   webpackFinal: async config => ({
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@@': path.resolve(__dirname, '../src/.umi'),
        }
      }
    }), */
};