import type { TimeLeft } from '../types'
import './TimeDisplay.css'

interface TimeDisplayProps {
  timeLeft: TimeLeft
}

export const TimeDisplay = ({ timeLeft }: TimeDisplayProps) => {
  const { days, hours, minutes, seconds } = timeLeft

  return (
    <div className="time-display">
      <div className="time-card">
        <span className="time-value">{days}</span>
        <small className="time-label">Days</small>
      </div>
      <div className="time-card">
        <span className="time-value">{hours}</span>
        <small className="time-label">Hours</small>
      </div>
      <div className="time-card">
        <span className="time-value">{minutes}</span>
        <small className="time-label">Minutes</small>
      </div>
      <div className="time-card">
        <span className="time-value">{seconds}</span>
        <small className="time-label">Seconds</small>
      </div>
    </div>
  )
}

