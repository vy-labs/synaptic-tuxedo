require('@babel/register');
const webpack = require('webpack');
// const webpackConfig = require('../config').default;
const path = require('path');
const antdTheme = require('../theme/index.antd');

// const buildTarget = webpackConfig.get('globals').__CRYPTO__ ? 'crypto' : 'main';
// const NormalModuleReplacementPlugin = webpack.NormalModuleReplacementPlugin;
// const buildNormalModuleReplacementPlugin = new NormalModuleReplacementPlugin(
//   /(.*)-BUILDSYSTEM(\.*)/,
//   function replaceFn(resource) {
//     resource.request = resource.request.replace(
//       /-BUILDSYSTEM/,
//       `-${buildTarget}`
//     );
//   }
// );

module.exports = ({ config, mode }) => {
  const loaderIndex = config.module.rules.findIndex(r => r.test.test('.ttf'));
  if (loaderIndex > -1) {
    config.module.rules.splice(
      loaderIndex,
      1,
      ...[
        {
          test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2)(\?.*)?$/,
          loader: require.resolve('file-loader'),
          query: {
            name: 'static/media/[name].[hash:8].[ext]'
          }
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: 'svg-inline-loader?idPrefix=true'
            }
          ]
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader',
              options: {
                minimize: true
              }
            }
          ]
        }
      ]
    );
  }

  config.module.rules.push(
    {
      test: /\.less$/,
      use: [
        'style-loader',
        'css-loader',
        'postcss-loader',
        {
          loader: 'less-loader',
          options: {
            modifyVars: antdTheme()
          }
        }
      ]
    }
  );

  config.resolve.alias = {
    tuxedo: path.resolve(__dirname, '../src'),
    theme: path.resolve(__dirname, '../theme')
  };

  return config;
};
