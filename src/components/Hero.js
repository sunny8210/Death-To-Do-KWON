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
            <a
              className="btn btn-outline-warning"
              href="https://poocoin.app/tokens/0xaf4b199f9340064838db5efddb2f2a5915269b3f"
              target="_blank"
              rel="noreferrer"
            >
              Chart{" "}
            </a>
            <a
              className="btn btn-warning ms-2"
              href="https://pancakeswap.finance/swap?outputCurrency=0xaf4b199f9340064838db5efddb2f2a5915269b3f"
              target="_blank"
              rel="noreferrer"
            >
              Buy $DEAD
            </a>
          </div>
        </div>
        <div className="col-lg-5">
          <img src={logo} alt="" />
        </div>
      </div>
    </div>
  );
}
