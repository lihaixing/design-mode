const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    devServer: {
        contentBase: path.join(__dirname, './release'), //本地服务器加载页面所在的目录
        open: true,
        port: 9000,
        proxy: {
            "/api": {
                target: "http://localhost:9001",
                pathRewrite: { "^/api": "" }
            }
        }
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },
    output: {
        path: __dirname,
        filename: './release/bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
}