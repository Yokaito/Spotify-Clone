import { configureStore } from '@reduxjs/toolkit'
import currentSong from 'store/slices/currentSongSlice'
import configClient from 'store/slices/configClientSlice'

const store = configureStore({
  reducer: {
    currentSong,
    configClient
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
