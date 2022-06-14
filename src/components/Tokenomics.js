import React from 'react'
import Piechart from './Piechart';

export default function Tokenomics() {
    return (
        <div>
            <div id="tokenomics"></div>
            <div className='container tokenomics-main'>
                <h2>TOKENOMICS</h2>
                {/* <div className="row pt-5 justify-content-between">
                    <div className="col-md-3 my-2">
                        10% Tax
                    </div>
                    <div className="col-md-3 my-2">
                        6% Marketing
                    </div>
                    <div className="col-md-3 my-2">
                        4% LP
                    </div>
                </div> */}
            </div>
            <Piechart />
        </div>
    )
}
