import React, { FunctionComponent } from "react";
import "./Home.styles.css";

const Home: FunctionComponent = () => {
  return (
    <div className="divs">
      <div className="link-card">
        <h1>Склад профбюро</h1>
        <div className="blure-layer"></div>
        <img src="img/fmi.svg" alt="" />
      </div>
    </div>
  );
};

export default Home;
