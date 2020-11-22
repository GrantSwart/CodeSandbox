import React from "react";
import "./styles.css";

import Header from "/Header";
import Meme from "/Meme";

export default function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <Meme />
      </div>
    </div>
  );
}
