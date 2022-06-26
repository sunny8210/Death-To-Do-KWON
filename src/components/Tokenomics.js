import React from 'react'
import Piechart from './Piechart';

export default function Tokenomics() {
    return (
        <div>
            <div id="tokenomics"></div>
            <div className='container tokenomics-main'>
                <h2>TOKENOMICS</h2>
                <p>Sell tax will start at 10%  and will increase by 2% with each consecutive sell till it reaches 20% and then it switches where 
                    it enters into KOTH mode for 5 mins and the last buyer during that time for $100 or above amount will receive 5% additional tokens. 
                    KOTH mode is also triggered when there is a huge sell worth $1000 or above. Once contract picks a winner the sell tax will reset back 
                    to 10%. During KOTH all sellers will have to pay 20% tax and winning buyer takes the reward.</p>

                <p>50% of increased sell fee go to holders in form of reflections and the rest 50% will be added back to LP.</p>
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
