import React, { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    console.log(window.location.hash);
  }, []);

  return <div className="App"></div>;
}

export default App;
