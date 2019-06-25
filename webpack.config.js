const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')  
// tsconfigのpathsを解決するやつ
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
// バンドルサイズを可視化
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
// ビルドの進捗をプログレスバーで表示
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
// gzipで圧縮
const CompressionPlugin = require('compression-webpack-plugin')
const zopfli = require('@gfx/zopfli')

const development = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, './dist'),
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(post)?css$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.svg$/,
        use: [
          'svg-url-loader'
        ]
      },
      {
        test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(jpg|png)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    plugins: [
      new TsconfigPathsPlugin()
    ],
    extensions: ['.ts', '.js', '.vue', '.json', '.jpg', '.png', '.svg']
  },
  devServer: {
    port: 8080,
    historyApiFallback: true
  },
  performance: {
    hints: false
  },
  plugins: [
    new VueLoaderPlugin(),
    new ProgressBarPlugin(),
    new BundleAnalyzerPlugin()
  ],
  devtool: '#eval-source-map'
}

const production = {
  ...development,
  mode: 'production',
  plugins: [
    ...development.plugins,
    new CompressionPlugin({
      compressionOptions: {
        numiterations: 15
      },
      algorithm(input, compressionOptions, callback) {
        return zopfli.gzip(input, compressionOptions, callback);
      }
    })
  ],
  devtool: '#source-map'
}

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production'
  return isProduction ? production : development
}
