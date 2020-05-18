module.exports = {
  stories: ['../../src/**/*.stories.(js|jsx|ts|tsx|mdx)'],
  addons: [
    {
      name: '@storybook/addon-docs',
      options: {
        babelOptions: {
          presets: [
            [
              '@vue/cli-plugin-babel/preset',
              {
                jsx: false
              }
            ]
          ]
        }
      }
    },
  ]
}
