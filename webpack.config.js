const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  mode: "none",
  entry: {
    app: ["@babel/polyfill", "./src/app/scripts/main.js"],
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "js/app.bundle.js",
  },
  devServer: {
    port: 5050,
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        loader: "babel-loader",
      },
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/[name][ext]",
        },
      },
      {
        test: /\.html$/i,
        use: [
          {
            loader: "html-loader",
          }
        ]
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      inject: "body",
      hash: true,
      template: "./src/index.html",
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: "css/app.bundle.css",
    }),
  ],
};