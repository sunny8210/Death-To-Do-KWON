import React from "react";
import Accordion from "react-bootstrap/Accordion";

export default function FAQs() {
  return (
    <div>
      <div className="container faq-main">
        <h2 className="text-center">HOW TO BUY $DEAD ?</h2>
        <div className="container-fluid pt-5">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>STEP 1</Accordion.Header>
              <Accordion.Body>
                Download trustwallet From The App Store or Google Play Store, for free. Or add the desktop browser extension on Google Chrome by going to metamask.io. Follow their easy steps from their guide to set up a wallet.
              </Accordion.Body>
            </Accordion.Item>
            <br />
            <Accordion.Item eventKey="1">
              <Accordion.Header>STEP 2</Accordion.Header>
              <Accordion.Body>
              Send BNB (BEP-20) to Trustwallet You can buy BNB directly through Trustwallet or you can transfer some from another wallet or crypto exchange. You can follow tutorials on Youtube if you get stuck on this step.
              </Accordion.Body>
            </Accordion.Item>
            <br />
            <Accordion.Item eventKey="2">
              <Accordion.Header>STEP 3</Accordion.Header>
              <Accordion.Body>
              Connect To Pancakeswap Go to Pancakeswap via a desktop browser or inside your Trustwallet wallet tap Browser on the bottom page.
              </Accordion.Body>
            </Accordion.Item>
            <br />
            <Accordion.Item eventKey="3">
              <Accordion.Header>STEP 4</Accordion.Header>
              <Accordion.Body>
              Swap your BNB (BEP-20) for $DEAD Click the cog button and change the Slippage amount to 12%. Add your desired BNB amount you’d like to swap, once you’re happy click the “Swap” button to finalize the trade.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
