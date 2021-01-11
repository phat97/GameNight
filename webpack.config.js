const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {

    entry: { index: path.resolve(__dirname + "/client/", "src", "index.js") },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js"
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./client/public/index.html", filename: "./index.html"
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    }
}
