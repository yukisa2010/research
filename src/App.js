import React from "react";
import TableComponent from "./TableComponent.js";
import Questions from "./Questions.js";
import FormInfo from "./FormInfo.js";
import Attention from "./Attention";

const App = () => (
  <div className="App">
    <img src="../img/c_banner_call.png" alt="howto" width="100%" />
    <TableComponent />
    <Questions />
    <h2>発送情報</h2>
    <FormInfo />
    <Attention />
    <button>登録</button>
  </div>
);

export default App;
