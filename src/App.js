import "./App.css";
import NavBar from "./Components/NavBar";
import News from "./Components/News";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <News pageSize={30} />
    </div>
  );
}

export default App;
