import React from 'react'
import {FaFacebookSquare, FaTwitterSquare, FaTelegramPlane} from 'react-icons/fa'

export default function () {
  return (
    <div className='container-fluid footer-main'>
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <h5>Community</h5>
                    <ul>
                        <li><a href="#">Telegram</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Discord</a></li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <h5>Listings</h5>
                    <ul>
                        <li><a href="#">BSCScan</a></li>
                        <li><a href="#">PancakeSwap</a></li>
                        <li><a href="#">Chart</a></li>
                        <li><a href="#">CoinMarketCap</a></li>
                        <li><a href="#">Coingecko</a></li>
                    </ul>
                </div>
                <div className="col-md-6">
                    <h5>Support: support@deathtokwon.com</h5>
                    <p>Our community is growing stronger by the day. Follow us on our social media platforms to get the most up-to-date, and accurate $DEAD information.</p>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-md-6">© 2022 DEATH TO DO KWON. All Rights Reserved</div>
                <div className="col-md-6 d-flex justify-content-center justify-content-md-end">
                    <a href="#" className='mx-2 fs-3 text-light'><FaTelegramPlane/></a>
                    <a href="#" className='mx-2 fs-3 text-light'><FaTwitterSquare/></a>
                    <a href="#" className='mx-2 fs-3 text-light'><FaFacebookSquare/></a>
                </div>
            </div>
        </div>
    </div>
  )
}
