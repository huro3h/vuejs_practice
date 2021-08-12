const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"],
      },
    
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        // Babelのオプション指定
        options: {
          presets: [
            "@babel/preset-env",
          ],
        },
      },
    ],
  },
  
  resolve: {
    // Webpackで利用するときの設定
    alias: {
      vue$: "vue/dist/vue.esm.js",
    },
    extensions: ["*", ".js", ".vue", ".json"],
  },
  
  plugins: [
    new VueLoaderPlugin(),
  ],
}
