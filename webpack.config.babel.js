import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import UnusedWebpackPlugin from 'unused-webpack-plugin';
import antdTheme from './theme/index.antd';

const mode = 'production';
const isDev = mode === 'development';
const target = 'web';
// const devServer = {
//   contentBase: paths.project(config.get('dir_src')),
//   hot: true,
//   noInfo: false,
//   stats: {
//     all: false,
//     modules: true,
//     assets: true,
//     builtAt: true,
//     env: true,
//     maxModules: 0,
//     errors: true,
//     warnings: true,
//     // our additional options
//     moduleTrace: true,
//     errorDetails: true
//   },
//   compress: false,
//   historyApiFallback: true,
//   watchOptions: {
//     aggregateTimeout: 2000,
//     ignored: /node_modules/
//   }
// };

const entry = './src/index';
const output = {
  filename: '[name].js',
  path: path.resolve(__dirname, 'dist'),
  publicPath: '/'
};

const resolve = {
  modules: ['node_modules', path.resolve(__dirname, 'src')],
  extensions: ['.js', '.jsx'],
  alias: {
    tuxedo: path.resolve(__dirname, 'src'),
    theme: path.resolve(__dirname, 'theme')
  }
};

// Modules
const babelLoader = {
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  loaders: ['babel-loader?cacheDirectory']
};

const imageLoader = {
  test: /\.png$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        publicPath: '/'
      }
    }
  ]
};

const fontFilesLoader = {
  test: /\.(woff|eot|ttf|woff2)$/,
  use: [
    {
      loader: 'file-loader'
    }
  ]
};

const svgLoader = {
  test: /\.svg$/,
  use: [
    {
      loader: 'svg-inline-loader?idPrefix=true'
    }
  ]
};

// To override antd style - we compile antd less files with overridden theme variables
const lessLoader = {
  test: /\.less$/,
  include: [/node_modules\/.*antd/],
  use: [
    MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        importLoaders: 2
      }
    },
    'postcss-loader',
    {
      loader: 'less-loader',
      options: {
        modifyVars: antdTheme()
      }
    }
  ]
};

const module = {
  rules: [babelLoader, imageLoader, fontFilesLoader, svgLoader, lessLoader]
};

const plugins = [
  new MiniCssExtractPlugin({
    filename: isDev ? '[name].css' : '[name].[id].[contenthash].css',
    chunkFilename: isDev ? '[name].css' : '[name].[id].[contenthash].css'
  })
];

const webpackConfig = {
  mode,
  target,
  entry,
  output,
  plugins,
  resolve,
  // devServer,
  // optimization,
  module
};

export default webpackConfig;
