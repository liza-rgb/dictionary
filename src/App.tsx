import React from "react";

import Dictionary from "./components/Dictionary";

import "./App.css";

function App() {
  return (
    <div className="App">
      <main>
        <Dictionary defaultWord="imagine" />
      </main>
    </div>
  );
}

export default App;
