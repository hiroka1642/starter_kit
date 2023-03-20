import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// TypeScript を使う場合は document.getElementById('app') が undefined になる可能性があるとして警告が出るので ! (Non-Null Assertion Operator) を使うと良い (https://chaika.hatenablog.com/entry/2022/05/24/083000)
const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// reportWebVitals();
