import { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import {
  setDuration as setDurationRedux,
  getCurrentSong as getCurrentSongRedux,
  setCurrentSong as setCurrentSongRedux
} from 'store/slices/currentSongSlice'
import { getConfigClient } from 'store/slices/configClientSlice'
import { getCurrentPlaylist } from 'store/slices/currentPlaylistSlice'
import Time from 'functions/time'
import axios from 'axios'

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
  const currentPlaylist = useAppSelector(state => getCurrentPlaylist(state))

  useEffect(() => {
    async function fetchData() {
      if (currentPlaylist.id !== 0) {
        const localSongId = localStorage.getItem('currentSongId') || 0
        const id = localSongId !== 0 ? localSongId : currentPlaylist.songs[0].id

        const response = await axios.get(`/api/songs/${id}`)
        dispatch(setCurrentSongRedux({ ...response.data.song }))
      }
    }
    fetchData()
  }, [currentPlaylist])

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

  useEffect(() => {
    async function setNextSong() {
      currentPlaylist.songs.forEach(async (song, index) => {
        if (song.id === currentSong.id) {
          const nextSong = currentPlaylist.songs[index + 1]
          if (nextSong) {
            const response = await axios.get(`/api/songs/${nextSong.id}`)
            dispatch(setCurrentSongRedux({ ...response.data.song }))
          } else {
            const response = await axios.get(
              `/api/songs/${currentPlaylist.songs[0].id}`
            )
            dispatch(setCurrentSongRedux({ ...response.data.song }))
          }
        }
      })
    }

    audio.addEventListener('ended', setNextSong)

    return () => {
      audio.removeEventListener('ended', setNextSong)
    }
  })

  useEffect(() => {
    const saveAudioSettingsLocal = () => {
      localStorage.setItem('currentTime', audio.currentTime.toString())
      localStorage.setItem('volume', audio.volume.toString())
      localStorage.setItem('muted', audio.muted.toString())
      localStorage.setItem('repeat', audio.loop.toString())
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
