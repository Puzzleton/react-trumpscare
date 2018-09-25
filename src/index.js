import React from 'react';
import { render } from "react-dom";
import { TrumpScare } from "./lib";

const App = () => (
  <div style={{ height: 5000 }}>
    <h1>Hello React</h1>
    <TrumpScare trigger="random" />
  </div>
);

render(<App />, document.getElementById("root"));
