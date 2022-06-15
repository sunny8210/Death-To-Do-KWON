import React from 'react'
import kwon from '../images/do-kwon.jpg'

export default function About() {
  return (
    <div>
      <div id="about"></div>
      <div className="about-main container">
        <div className="row">
          <div className="col-md-6">
            <h2>PROJECT &amp; ECOSYSTEM</h2>
            <p>
              The arrogance of Do Kwon resulted in the death of 8 investors and
              thousands of others went bankrupt from the unexpected LUNA-UST
              crash. We hold Do Kwon solely responsible for a failed LUNA-UST
              ecosystem. There are reports surfacing that Do Kwon used his
              wallet holding 40M LUNA tokens to vote in favour of relaunch of
              LUNA instead of the burn proposal and made fortune out of LUNA and
              LUNA Classic launch.
            </p>
            <p>
              DEATH TO DO KWON ($DEAD) token is a fun based memecoin to avenge
              the losses and launch an NFT series dedicated to giving painful
              death to Do Kwon for wiping out billions of dollars from the
              market and bankrupting thousands of LUNA-UST investors. Each NFT
              will represent a unique way of giving death penalty to Do Kwon.
              There will be a total of 9999 NFTs with 99 possible ways of
              death. 4444 NFTs will be open for free minting while the rest
              5555 can be minted at a cost of 0.01ETH.
            </p>
            <p>Free minting will only be open to the holders of $DEAD tokens.</p>
            <a href="#" className="btn btn-warning">
              WHITEPAPER
            </a>
          </div>
          <div className="col-md-6 d-flex align-items-center py-5 py-md-0">
            <img src={kwon} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
