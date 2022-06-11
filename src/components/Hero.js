import React from "react";
import logo from "../images/logo.png";

export default function Hero() {
  return (
    <div className="container hero-main">
      <div className="row">
        <div className="col-lg-7">
          <h1>DEATH TO DO KWON</h1>
          <p>
            Come and avenge your losses in LUNA and give "DEATH TO DO KWON" in a
            unique way by purchasing $DEAD tokens and a chance to hold our
            unique NFTs.
          </p>
          <div>
            <button className="btn btn-outline-warning">Button 1</button>
            <button className="btn btn-warning ms-2">Button 1</button>
          </div>
        </div>
        <div className="col-lg-5">
          <img src={logo} alt="" />
        </div>
      </div>
    </div>
  );
}
