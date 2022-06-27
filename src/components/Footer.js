import React from "react";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaTelegramPlane,
} from "react-icons/fa";

export default function () {
  return (
    <div className="container-fluid footer-main">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5>Community</h5>
            <ul>
              <li>
                <a href="https://t.me/DEAD_BSC_announcements">Telegram</a>
              </li>
              <li>
                <a href="https://twitter.com/DEAD_BSC">Twitter</a>
              </li>
              <li>
                <a href="#">Discord</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Listings</h5>
            <ul>
              <li>
                <a
                  href="https://bscscan.com/address/0xaf4b199f9340064838db5efddb2f2a5915269b3f"
                  target="_blank"
                  rel="noreferrer"
                >
                  BSCScan
                </a>
              </li>
              <li>
                <a
                  href="https://pancakeswap.finance/swap?outputCurrency=0xaf4b199f9340064838db5efddb2f2a5915269b3f"
                  target="_blank"
                  rel="noreferrer"
                >
                  PancakeSwap
                </a>
              </li>
              <li>
                <a
                  href="https://poocoin.app/tokens/0xaf4b199f9340064838db5efddb2f2a5915269b3f"
                  target="_blank"
                  rel="noreferrer"
                >
                  Chart
                </a>
              </li>
              <li>
                <a href="#">CoinMarketCap</a>
              </li>
              <li>
                <a href="#">Coingecko</a>
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <h5>Support: support@deathtokwon.com</h5>
            <p>
              Our community is growing stronger by the day. Follow us on our
              social media platforms to get the most up-to-date, and accurate
              $DEAD information.
            </p>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-6">
            © 2022 DEATH TO DO KWON. All Rights Reserved
          </div>
          <div className="col-md-6 d-flex justify-content-center justify-content-md-end">
            <a href="https://t.me/DEAD_BSC_announcements" target="_blank" rel="noreferrer" className="mx-2 fs-3 text-light">
              <FaTelegramPlane />
            </a>
            <a href="https://twitter.com/DEAD_BSC" target="_blank" rel="noreferrer" className="mx-2 fs-3 text-light">
              <FaTwitterSquare />
            </a>
            <a href="#" className="mx-2 fs-3 text-light">
              <FaFacebookSquare />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
