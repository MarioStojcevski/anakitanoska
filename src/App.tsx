/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const arrival = new Date("2025-11-07T18:25:00").getTime();
  const [timeLeft, setTimeLeft] = useState(arrival - Date.now());
  const [showTime, setShowTime] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setTimeLeft(arrival - Date.now());
    }, 1000);

  }, []);

  const totalSec = Math.max(0, Math.floor(timeLeft / 1000));
  const days = Math.floor(totalSec / 86400);
  const hours = Math.floor((totalSec % 86400) / 3600);
  const minutes = Math.floor((totalSec % 3600) / 60);
  const seconds = totalSec % 60;

  console.log(timeLeft);

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={"./cutes.png"} className="logo cutes" />
        </a>
      </div>
      <h1>{"Ана <3 Марио"}</h1>
      <div className="card">
        <button onClick={() => setShowTime(true)}>
          Уште колку има
        </button>
        <p>
          46.47513646510994, 13.780797023701128
        </p>
      </div>
      {showTime &&
        <div className='time-box'>
          <div><span>{days}</span><small>Days</small></div>
          <div><span>{hours}</span><small>Hours</small></div>
          <div><span>{minutes}</span><small>Minutes</small></div>
          <div><span>{seconds}</span><small>Seconds</small></div>
        </div>
      }
    </>
  )
}

export default App
