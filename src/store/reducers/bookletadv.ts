import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'
import { AdvItem } from '@/interface/adv'

const BookletAdvSlice = createSlice({
  name: 'bookletadv',
  initialState: {
    advList: [{ key: 1, title: '默认图片', show: false, src: '', width: 240, height: 200 }],
  },
  reducers: {
    changeAdvList: (state, action: PayloadAction<AdvItem[]>) => {
      state.advList = action.payload
    },
  },
})

export const { changeAdvList } = BookletAdvSlice.actions

export default BookletAdvSlice.reducer
