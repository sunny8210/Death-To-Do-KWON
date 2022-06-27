import React,{useEffect, useState} from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import './countdown.css'
import KothDetails from './KothDetails'
import { Login } from '../Web3_connection/Web3'
import { getTime, KOTH, Winner, WinnerAmount } from '../Web3_connection/Contract_Methods'


export default function Countdown() {

  const [time, settime] = useState(0);
  const [iskoth, setISKoth] = useState(0);
  const [winner, setWinner] = useState(0);
  const [amount, setAmount] = useState(0);

  useEffect(()=>{
    const init=async()=>{
      await Login();
      getTime();
    }
    init();

    setInterval(()=>{
      InsteadUpdate();
    },2000)

  },[])

  const InsteadUpdate =async()=>{
    const time = await getTime();
    const kothcheck = await KOTH();
    if(kothcheck){
      settime(time)
    }
    else{
      settime(0)
    }
    const win = await Winner();
    const winAmount = await WinnerAmount();
    console.log("Instead data", time, kothcheck, win, winAmount)
  }


  const formatRemainingTime = (time) => {
    const minutes = Math.floor((time % 3600) / 60)
    const seconds = time % 60
    return `${minutes}:${seconds}`
  }
  
  const renderTime = ({ remainingTime }) => {
    console.log(remainingTime)
    if (remainingTime < 0) {
      return <div className="timer">Too late...</div>
    }
  
    return (
      <div className="timer">
        <div className="text">Remaining time</div>
        <div className="value">{formatRemainingTime(remainingTime)}</div>
      </div>
    )
  }

  return (
    <div>
      <div id="koth"></div>
      <div className="container countdown-main">
        <h2 className="text-center my-5">KOTH DASHBOARD</h2>
        <div className="row">
          <div className="col-md-6">
            <div className="timer-wrapper">
              <CountdownCircleTimer
                isPlaying
                size={300}
                duration={time}
                colors={['#006600', '#33cc33', '#ff9900', '#ff0000']}
                colorsTime={[120, 75, 40, 0]}
                onComplete={() => [true, 1000]}
              >
                {renderTime}
              </CountdownCircleTimer>
            </div>
          </div>
          <div className="col-md-6">
            <KothDetails />
          </div>
        </div>
      </div>
    </div>
  )
}
