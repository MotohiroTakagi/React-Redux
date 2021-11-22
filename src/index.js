import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// ReactのコンポーネントからReduxのstoreにアクセスするためにはProviderコンポーネントが必要
import { Provider } from "react-redux"
import store from './store/index'

ReactDOM.render(
  // Providerでコンポーネントを包むことでreduxという独立した機能をReactと連携させる
  // storeをpropsとしてProviderコンポーネントに渡す
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
