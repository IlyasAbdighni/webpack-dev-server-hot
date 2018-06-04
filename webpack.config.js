const path = require("path");
const webpack = require("webpack");

module.exports = {
    mode: 'development',
    entry: ["babel-polyfill", "./app.js"],
    output: {
        "path": path.resolve(__dirname),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js/, exclude: /node_modules/, use: 'babel-loader'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    devServer: {
        contentBase: path.join(__dirname),
        compress: true,
        port: 3000,
        historyApiFallback: true,
        hot: true
      }
}