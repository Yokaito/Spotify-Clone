interface TimeProps {
  getPercentage: (currentTime: number, durationTime: number) => number
  transformTime: (time: number) => string
  getSeconds: (percentage: number, duration: number) => number
}

export const Time: TimeProps = {
  getPercentage: (currentTime, durationTime) => {
    return (currentTime / durationTime) * 100
  },
  transformTime: time => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time - minutes * 60)
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
  },
  getSeconds: (percentage: number, duration: number) => {
    return (percentage / 100) * duration
  }
}

export default Time
