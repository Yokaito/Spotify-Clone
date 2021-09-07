import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from 'store/store'

interface CounterState {
  value: number
  test: string
}

const initialState: CounterState = {
  value: 0,
  test: ''
}

export const fetchBySong = createAsyncThunk('counter/fetchBySong', async () => {
  const response = await fetch(
    `https://baconipsum.com/api/?type=meat-and-filler`
  )
  return await response.json()
})

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    }
  },
  extraReducers: {
    [fetchBySong.fulfilled.type]: (state, action) => {
      state.test = action.payload
    }
  }
})
/*
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export const selectCount = (state: RootState): number => state.counter.value

export default counterSlice.reducer */
