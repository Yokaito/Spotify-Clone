import { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import {
  setDuration as setDurationRedux,
  getCurrentSong as getCurrentSongRedux
} from 'store/slices/currentSongSlice'
import { getConfigClient } from 'store/slices/configClientSlice'
import Time from 'functions/time'

interface useAudioPlayerResult {
  duration: string
  currentTime: string
  currentPercent: number
  setCustomTime: (percentage: number) => void
}

const useAudioPlayer = (url: string): useAudioPlayerResult => {
  const [audio] = useState<HTMLAudioElement>(new Audio())
  const [duration, setDuration] = useState('')
  const [currentTime, setCurrentTime] = useState('')
  const [currentPercent, setCurrentPercent] = useState(0)
  const dispatch = useAppDispatch()
  const configClient = useAppSelector(state => getConfigClient(state))
  const currentSong = useAppSelector(state => getCurrentSongRedux(state))

  useEffect(() => {
    audio.currentTime = currentSong.currentTime
  }, [currentSong.currentTime])

  useEffect(() => {
    const { volume, muted, repeat } = configClient
    audio.volume = volume
    audio.muted = muted
    audio.loop = repeat
  }, [configClient])

  useEffect(() => {
    audio.src = process.env.PUBLIC_URL + `/audio${url}`
    setDuration('')
    setCurrentTime('')
    setCurrentPercent(0)
    audio.load()
  }, [url])

  useEffect(() => {
    currentSong.playing ? audio.play() : audio.pause()
  }, [currentSong.playing, url])

  useEffect(() => {
    const setAudioData = () => {
      setDuration(Time.transformTime(audio?.duration))
      setCurrentTime(Time.transformTime(audio?.currentTime))
      dispatch(setDurationRedux(audio?.duration))
    }

    const setAudioTime = () => {
      setCurrentTime(Time.transformTime(audio?.currentTime))
      setCurrentPercent(Time.getPercentage(audio?.currentTime, audio?.duration))
    }

    audio.addEventListener('loadeddata', setAudioData)
    audio.addEventListener('timeupdate', setAudioTime)

    return () => {
      audio.removeEventListener('loadeddata', setAudioData)
      audio.removeEventListener('timeupdate', setAudioTime)
    }
  })

  const setCustomTime = (percentage: number) => {
    audio.currentTime = Time.getSeconds(percentage, audio.duration)
  }

  /* useEffect(() => {
    const setNextSong = () => {
      dispatch(setSong('music.mp3'))
    }

    audio.addEventListener('ended', setNextSong)

    return () => {
      audio.removeEventListener('ended', setNextSong)
    }
  }) */

  useEffect(() => {
    const saveAudioSettingsLocal = () => {
      localStorage.setItem('currentTime', audio.currentTime.toString())
      localStorage.setItem('volume', audio.volume.toString())
    }

    window.addEventListener('beforeunload', saveAudioSettingsLocal)

    return () => {
      window.removeEventListener('beforeunload', saveAudioSettingsLocal)
    }
  }, [])

  return {
    duration,
    currentTime,
    currentPercent,
    setCustomTime
  }
}

export default useAudioPlayer
