import { useEffect, useState } from 'react'
import { calculateTimeLeft } from '../utils/timeUtils'

export const useCountdown = (targetDate: string | number) => {
  const [timeLeft, setTimeLeft] = useState(() => {
    const target = typeof targetDate === 'string' 
      ? new Date(targetDate).getTime() 
      : targetDate
    return calculateTimeLeft(target)
  })

  useEffect(() => {
    const target = typeof targetDate === 'string' 
      ? new Date(targetDate).getTime() 
      : targetDate

    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(target))
    }, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  return timeLeft
}


