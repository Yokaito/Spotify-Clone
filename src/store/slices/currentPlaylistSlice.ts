/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import type { RootState } from 'store/store'

export const fetchCurrentPlaylist = createAsyncThunk(
  'currentPlaylist/fetchCurrentPlaylist',
  async (playlistId: number): Promise<any> => {
    const response = await axios.get(`/api/playlists/${playlistId}`)
    return response.data.playlist
  }
)

interface CurrentPlaylistState {
  id: number
  title: string
  songs: SongState[]
}

interface SongState {
  id: number
  alreadyPlayed: boolean
  shuffleId: number | null
}

const initialState: CurrentPlaylistState = {
  id: 0,
  title: '',
  songs: []
}

export const currentPlaylistSlice = createSlice({
  name: 'currentPlaylist',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchCurrentPlaylist.fulfilled, (state, action) => {
      const { id, title, songs } = action.payload

      const songWithState = songs.map((song: any) => ({
        id: song,
        alreadyPlayed: false,
        shuffleId: null
      }))

      return {
        ...state,
        id,
        title,
        songs: songWithState
      }
    })
  }
})

export const getCurrentPlaylist = (state: RootState): CurrentPlaylistState =>
  state.currentPlaylist

export default currentPlaylistSlice.reducer
