/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const arrival = new Date("2025-12-08T15:00:00").getTime();
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

  return (
    <>
      <div>
        <img src="./blob.webp" className="logo cutes" />
      </div>
      <h1>{"Ана <3 Марио"}</h1>
      <div className="card">
        <button onClick={() => {
          alert('We are having some issues with the services. The data may be inaccurate. Please try again later.');
          setShowTime(true);
        }}>
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
