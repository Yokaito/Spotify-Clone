import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from 'store/store'

interface ConfigClientState {
  volume: number
  muted: boolean
  repeat: boolean
  shuffle: boolean
}

const initialState: ConfigClientState = {
  volume: localStorage.getItem('volume')
    ? parseFloat(localStorage.getItem('volume') || '1')
    : 1,
  muted: localStorage.getItem('muted')
    ? JSON.parse(localStorage.getItem('muted') || 'false')
    : false,
  repeat: localStorage.getItem('repeat')
    ? JSON.parse(localStorage.getItem('repeat') || 'false')
    : false,
  shuffle: localStorage.getItem('shuffle')
    ? JSON.parse(localStorage.getItem('shuffle') || 'false')
    : false
}

export const configClientSlice = createSlice({
  name: 'configClient',
  initialState,
  reducers: {
    setVolume: (state, action: PayloadAction<number>) => {
      state.volume = action.payload
    },
    setMuted: (state, action: PayloadAction<boolean>) => {
      state.muted = action.payload
    },
    setRepeat: (state, action: PayloadAction<boolean>) => {
      state.repeat = action.payload
    },
    setShuffle: (state, action: PayloadAction<boolean>) => {
      state.shuffle = action.payload
    }
  }
})

export const { setMuted, setRepeat, setShuffle, setVolume } =
  configClientSlice.actions

export const getConfigClient = (state: RootState): ConfigClientState =>
  state.configClient

export default configClientSlice.reducer
