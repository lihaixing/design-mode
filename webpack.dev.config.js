const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    devServer: {
        contentBase: path.join(__dirname, './release'), //本地服务器加载页面所在的目录
        open: true,
        port: 9000
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['babel-preset-env'], // 没有这个语法规范，仍然无法转义
                    }
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