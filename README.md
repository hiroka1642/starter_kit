# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### エラー

--jsx で怒られる

- https://zenn.dev/kaikii/articles/7f14be0586128d

Field 'browser' doesn't contain a valid alias configuration が出る時[React]

- https://akamist.com/blog/archives/

- https://qiita.com/toshi-toma/items/080b89000ed7f0242bee#2-webpack%E3%81%AE%E8%A8%AD%E5%AE%9Awebpackconfigjs

--noEmit オプションについて

> --noEmit オプションはコンパイルが成功しようが失敗しようが、常に成果物を何も生成しません。tsc でファイルを生成する場合と違う手順でのみビルドするとき、例えば webpack で ts-loader を使っているプロジェクトなどで有効です。

型定義ファイルとは (d.ts)

> 型定義ファイルは主にパッケージを配布するために作成されます。TypeScript は JavaScript にコンパイルされるときに型情報は無くなってしまいます。

> tsc コマンドに-d オプションをつけてコンパイルを行うと JavaScript と型定義ファイルを出力することができます。

参考: https://typescriptbook.jp/reference/declaration-file#%E5%9E%8B%E5%AE%9A%E7%BE%A9%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%81%A8%E3%81%AF

Webpack の役割

> webpack は指定されたファイルを起点として、そこから import 文を頼りに芋づる式にファイルを繋げてゆき、一つにまとめた JavaScript ファイルを出力します。
> このまとめる処理はバンドル(bundle)と呼ばれています。（束ねるの意）そしてバンドルを行うツールはバンドラーと呼ばれています。
> ポイントは、“基本機能はあくまで一つの JavaScript ファイルにまとめる”というところです。

参考: https://qiita.com/koedamon/items/3e64612d22f3473f36a4#webpack%E3%81%AE%E5%BD%B9%E5%89%B2

Babel の役割

JavaScript を別の javaScript へ置き換える
新しいバージョンで書いたコードを古い環境でも使えるようにする

### その他参考サイト

TypeScript + webpack

- https://www.true-fly.com/entry/2022/03/14/080000#typescript%E3%81%A8%E4%BB%96%E5%BF%85%E8%A6%81%E3%81%AA%E3%83%A2%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%AB%E3%82%92%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB
