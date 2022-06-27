import React from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import './countdown.css'
import KothDetails from './KothDetails'

const formatRemainingTime = (time) => {
  const minutes = Math.floor((time % 3600) / 60)
  const seconds = time % 60

  return `${minutes}:${seconds}`
}

const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return <div className="timer">Too late...</div>
  }

  return (
    <div className="timer">
      <div className="text">Remaining time</div>
      <div className="value">{formatRemainingTime(remainingTime)}</div>
    </div>
  )
}
export default function Countdown() {
  return (
    <div>
      <div id="koth"></div>
      <div className="container countdown-main">
        <h2 className="text-center my-5">KOTH DASHBOARD</h2>
        <div className="row">
          <div className="col-md-6">
            <div className="timer-wrapper">
              <CountdownCircleTimer
                isPaused
                size={300}
                duration={150}
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
