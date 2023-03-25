const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// 本当は css のコンパイルにはこれを使う?
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  // モジュールバンドルを行う起点となるファイルの指定
  // 指定できる値としては、ファイル名の文字列や、それを並べた配列やオブジェクト
  // 下記はオブジェクトとして指定した例
  // 例
  // entry: {
  //   bundle: "./src/app.ts",
  // },

  // https://qiita.com/toshi-toma/items/080b89000ed7f0242bee#2-webpack%E3%81%AE%E8%A8%AD%E5%AE%9Awebpackconfigjs
  entry: "./src/index.tsx",
  output: {
    // モジュールバンドルを行った結果を出力する場所やファイル名の指定
    // "__dirname"はこのファイルが存在するディレクトリを表すnode.jsで定義済みの定数
    path: path.join(__dirname, "dist"),
    filename: "[name].js", // [name]はentryで記述した名前(今回は main）が入る
  },
  // モジュールとして扱いたいファイルの拡張子を指定する
  // 例えば「import Foo from './foo'」という記述に対して"foo.ts"という名前のファイルをモジュールとして探す
  // デフォルトは['.js', '.json']
  resolve: {
    //https://qiita.com/toshi-toma/items/080b89000ed7f0242bee#2-webpack%E3%81%AE%E8%A8%AD%E5%AE%9Awebpackconfigjs
    // https://webpack.js.org/configuration/resolve/#resolveextensions
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  devServer: {
    // webpack-dev-serverの公開フォルダ
    static: {
      directory: "index.html",
    },
  },
  // モジュールに適用するルールの設定（ここではローダーの設定を行う事が多い）
  module: {
    rules: [
      {
        // 拡張子が.tsxで終わるファイルに対して、TypeScriptコンパイラを適用する
        // https://qiita.com/toshi-toma/items/080b89000ed7f0242bee#2-webpack%E3%81%AE%E8%A8%AD%E5%AE%9Awebpackconfigjs
        test: /\.tsx?$/,
        loader: "ts-loader",
      },

      // https://morioh.com/p/a21da773af39
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[hash]-[name].[ext]",
            },
          },
        ],
      },
      // css-loader, style-loader を使って js に置き換える
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      // sass を css へ置き換えるには sass-loader, node-sass を使用する
    ],
  },
  plugins: [
    // html を dist 配下に作成する
    new HtmlWebpackPlugin({
      //テンプレートに使用するhtmlファイルを指定
      template: "./public/index.html",
    }),
  ],
};
