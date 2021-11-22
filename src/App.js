import React from "react";
import store from './store/index';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Redux Learn</h1>
      {/* storeに保存されているstateのcountにアクセスする */}
      <p>Count:{store.getState().count}</p>
    </div>
  );
}

export default App;
