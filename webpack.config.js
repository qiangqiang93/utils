const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: ["babel-loader", "ts-loader"],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  devtool: false,
  output: {
    filename: "dist/index.js",
    libraryTarget: "umd",
    path: path.resolve(__dirname, ""),
  },
  target: ["es5"],
  optimization: {
    usedExports: true,
    minimize: true,
  },
};
