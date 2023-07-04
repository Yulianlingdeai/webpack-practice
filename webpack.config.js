const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack"); // 访问内置的插件
const ConsoleLogOnBuildWebpackPlugin = require("./src/ConsoleLogOnBuildWebpackPlugin");

module.exports = {
    entry: "./src/index.js",
    mode: "development",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js"
    },
    module: {
        rules: [
            // 其他加载器规则...
            {
                test: /\.(js|jsx|vue)$/,
                exclude: /node_modules/,
                use: ["eslint-loader"]
            }
        ]
    },

    plugins: [
        new ConsoleLogOnBuildWebpackPlugin(),
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({ template: "./index.html" })
    ]
};
