import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'

const helloSlice = createSlice({
  name: 'hello',
  initialState: {
    value: 0,
  },
  reducers: {
    increase: (state) => {
      state.value += 1
    },
    decrease: (state) => {
      state.value -= 1
    },
    increaseByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
    decreaseByAmount: (state, action: PayloadAction<number>) => {
      state.value -= action.payload
    },
  },
})

export const { increase, decrease, increaseByAmount, decreaseByAmount } = helloSlice.actions

export default helloSlice.reducer
