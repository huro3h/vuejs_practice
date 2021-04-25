// Generated using webpack-cli http://github.com/webpack-cli
const { path, resolve }  = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        alias: {
            // 'vue$': 'vue/dist/vue.esm.js',
            vue: 'vue/dist/vue.js'
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),

        // Add your plugins here
        // Learn more obout plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            {
                test: /\\.(js|jsx)$/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/i,
                use: ['style-loader','css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/,
                type: 'asset',
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
    devServer: {
        watchContentBase: true,
        // 実行時(サーバー起動時)ブラウザ自動起動
        open: true,
        openPage: "index.html",
        // 同一network内からのアクセス可能に
        host: "0.0.0.0"
    },
};
