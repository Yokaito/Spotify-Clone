/* eslint-disable @typescript-eslint/no-explicit-any */
import Time from 'functions/time'
import { Dispatch } from 'hoist-non-react-statics/node_modules/@types/react'
import { useState, useEffect } from 'react'

interface useAudioPlayerResult {
  duration: string
  currentTime: string
  currentPercent: number
  playing: boolean
  setPlaying: Dispatch<boolean>
  setClickedTime: Dispatch<null>
}

const useAudioPlayer = (): useAudioPlayerResult => {
  const [duration, setDuration] = useState('')
  const [currentTime, setCurrentTime] = useState('')
  const [currentPercent, setCurrentPercent] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [clickedTime, setClickedTime] = useState(null)

  useEffect(() => {
    const audio: HTMLAudioElement | any = document.getElementById('audio')

    audio.volume = 0.1

    const setAudioData = () => {
      setDuration(Time.transformTime(audio?.duration))
      setCurrentTime(Time.transformTime(audio?.currentTime))
    }

    const setAudioTime = () => {
      setCurrentTime(Time.transformTime(audio?.currentTime))
      setCurrentPercent(Time.getPercentage(audio?.currentTime, audio?.duration))
    }

    audio.addEventListener('loadeddata', setAudioData)
    audio.addEventListener('timeupdate', setAudioTime)

    playing ? audio.play() : audio.pause()

    if (clickedTime && clickedTime !== currentTime) {
      audio.currentTime = clickedTime
      setClickedTime(null)
    }

    return () => {
      audio.removeEventListener('loadeddata', setAudioData)
      audio.removeEventListener('timeupdate', setAudioTime)
    }
  })

  return {
    duration,
    currentTime,
    currentPercent,
    playing,
    setPlaying,
    setClickedTime
  }
}

export default useAudioPlayer
