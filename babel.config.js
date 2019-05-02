module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets:
          '>0.35%, not op_mini >= 0, not and_chr > 0, not and_uc > 0, not android > 0, not opera > 0, not samsung > 0, not op_mini > 0, not op_mob > 0, not ie 11',
        useBuiltIns: 'usage',
        corejs: 3
      }
    ],
    [
      '@babel/preset-react',
      {
        development: process.env.NODE_ENV === 'development'
      }
    ]
  ],
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-class-properties',
    [
      'import',
      {
        libraryName: 'antd',
        style: true
      }
    ],
    [
      'module-resolver',
      {
        root: ['./lib'],
        alias: {
          tuxedo: './src',
          theme: './theme'
        }
      }
    ],
    process.env.NODE_ENV === 'development' && 'react-hot-loader/babel'
  ].filter(p => p)
};
