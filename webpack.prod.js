const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require('dotenv-webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    main: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js"
  },
  optimization: {
      minimizer: [
          new OptimizeCssAssetsPlugin({
              cssProcessorPluginOptions: {
              preset: ['default', { discardComments: { removeAll: true } }],
              },
          }),
          new TerserPlugin(),
          new HtmlWebpackPlugin({
            template: "./src/index.html",
            minify: {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true
                },
          }),
      ]
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: {
          loader: "html-loader",
          options: {
            attrs: ['video:src','video:poster', ':src', 'a:href'],
            interpolate: true,
          },
        },
      },
      {
        test: /.(svg|png|jpg|gif|mp4|ico|woff|woff2|ttf|eot)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            publicPath: "img",
            outputPath: "img",
            esModule: false,
          }
        }
      },
      {
        test: /.(pdf)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            publicPath: "files",
            outputPath: "files",
            esModule: false,
          },
        }
      },
      {
        test: /\.(s[ac]ss|css)$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
        filename: "[name].css",
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    }),
    new Dotenv(),
  ]
};
