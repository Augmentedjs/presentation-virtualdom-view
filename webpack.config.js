const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  context: __dirname,
  target: "web",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "presentation-virtualdom-view.js",
    publicPath: "/dist/",
    library: "presentation-virtualdom-view",
    globalObject: "this",
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  externals: {
    "presentation-view": {
      commonjs: "presentation-view",
      commonjs2: "presentation-view",
      amd: "presentation-view",
      root: "presentation-view"
    },
    "presentation-dom": {
      commonjs: "presentation-dom",
      commonjs2: "presentation-dom",
      amd: "presentation-dom",
      root: "presentation-dom"
    }
  },
  stats: "errors-only",
  devtool: "source-map",
  plugins: [
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(require("./package.json").version)
    })
  ]
};
