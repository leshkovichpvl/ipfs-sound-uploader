const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    mode: 'development',
    performance: {
        hints: process.env.NODE_ENV === 'production' ? "warning" : false
    },
    entry: './src/main.ts',

    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },

    watch: true,

    devtool: 'eval',

    context: path.resolve(__dirname, './'),

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader",
                options: {
                    transpileOnly: true
                }
            }
        ]
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "index.ejs",
            inject: false
        })
    ]
};

