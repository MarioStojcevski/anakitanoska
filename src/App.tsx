import { useState } from 'react'
import { useCountdown } from './hooks/useCountdown'
import { Header, CountdownButton, TimeDisplay, LocationCard } from './components'
import './App.css'
import { TARGET_ARRIVAL_TIME } from './constants/targetDate'

function App() {
  const timeLeft = useCountdown(TARGET_ARRIVAL_TIME)
  const [showTime, setShowTime] = useState(false)

  const handleButtonClick = () => {
    setTimeout(() => {
      setShowTime(true)
    }, 400)
  }

  return (
    <div className="app">
      <Header title="Ана <3 Марио" imageSrc="./blob.webp" />
      
      <div className="main-content">
        <div className="button-timer-container">
          {!showTime && (
            <CountdownButton 
              onClick={handleButtonClick}
              label="Уште колку има"
            />
          )}
          {showTime && <TimeDisplay timeLeft={timeLeft} />}
        </div>
        
        <LocationCard coordinates="46.47513646510994, 13.780797023701128" />
      </div>
    </div>
  )
}

export default App
