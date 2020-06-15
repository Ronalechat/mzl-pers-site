import React from "react";
import "./App.css";
import Home from "./components/home/Home";
import Background from "./components/background/Background";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Background />
        <Home />
      </header>
    </div>
  );
}

export default App;
