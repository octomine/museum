import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [cn, setCn] = useState("App");
  useEffect(() => {
    const hash = window.location.hash.replace(/#/, "");
    switch (hash) {
      case "aaa":
        setCn("pict");
        break;
      default:
    }
  }, []);

  return <div className={cn}></div>;
}

export default App;
