import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from 'store/store'

interface CurrentSongState {
  id: number
  url: string
  image: string
  duration: number
  currentTime: number
  title: string
  artists: Array<string>
  playing: boolean
}

const initialState: CurrentSongState = {
  id: 1,
  url: '/2/music.mp3',
  image: '/2/songImage.jpg',
  duration: 0,
  currentTime: localStorage.getItem('currentTime')
    ? parseInt(localStorage.getItem('currentTime') || '1')
    : 0,
  title: 'STAY (with Justin Bieber)',
  artists: ['The Kid LAROI', 'Justin Bieber'],
  playing: false
}

export const currentSongSlice = createSlice({
  name: 'currentSong',
  initialState,
  reducers: {
    setCurrentSong: (
      state,
      action: PayloadAction<Omit<CurrentSongState, 'duration' | 'playing'>>
    ) => {
      return {
        ...state,
        id: action.payload.id,
        url: action.payload.url,
        image: action.payload.image,
        title: action.payload.title,
        artists: action.payload.artists
      }
    },
    setPlaying: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        playing: action.payload
      }
    },
    setDuration: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        duration: action.payload
      }
    },
    setCurrentTime: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        currentTime: action.payload
      }
    }
  }
})

export const { setCurrentSong, setDuration, setPlaying, setCurrentTime } =
  currentSongSlice.actions

export const getCurrentSong = (state: RootState): CurrentSongState =>
  state.currentSong

export default currentSongSlice.reducer
