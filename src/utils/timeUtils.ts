export const calculateTimeLeft = (targetDate: number): {
  days: number
  hours: number
  minutes: number
  seconds: number
} => {
  const timeLeft = Math.max(0, targetDate - Date.now())
  const totalSec = Math.floor(timeLeft / 1000)
  
  const days = Math.floor(totalSec / 86400)
  const hours = Math.floor((totalSec % 86400) / 3600)
  const minutes = Math.floor((totalSec % 3600) / 60)
  const seconds = totalSec % 60

  return { days, hours, minutes, seconds }
}


