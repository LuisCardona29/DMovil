const cssInteropPlugin = require('react-native-css-interop/dist/babel-plugin').default;
const workletsPlugin = require('react-native-worklets/plugin');

module.exports = function (api) {
  api.cache(true);
  return {
    presets: [['babel-preset-expo', { jsxImportSource: 'nativewind' }]],
    plugins: [
      cssInteropPlugin,
      ['@babel/plugin-transform-react-jsx', { runtime: 'automatic', importSource: 'react-native-css-interop' }],
      workletsPlugin,
    ],
  };
};
