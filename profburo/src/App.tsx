import React from "react";
import "./App.css";
import OnlyForMobileCard from "./components/OnlyForMobileCard/OnlyForMobileCard";
import Home from "./pages/Home/Home";

function App() {
  const size = window.innerWidth;

  if (size > 450) {
    return (
      <div className="App">
        <OnlyForMobileCard />
      </div>
    );
  }

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
