import React from 'react'

export default function KothDetails() {
  return (
    <div>
      <div className="container koth-main">
        <div className="koth-details">
          <div className="showWinner">
            <div className="showWallet">
              <span className="showDetails">Wallet Address :</span>{' '}
              <a href="/" className="wallet-address-link">
                xxxxx00000000000000000000000000
              </a>
            </div>
            <div className="ktoh-other-details">
              <span className="showDetails">Winning Amount : </span>{' '}
              <span className="winner-details">200k</span> <br />
            </div>
            <div className="current-sell-tax">
              <span className="showDetails">Sell Tax During KOTH : </span>{' '}
              <span className="winner-details">20%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
