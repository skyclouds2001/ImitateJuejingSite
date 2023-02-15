import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'
import { NavItem } from '@/interface/nav'

const TopTabSlice = createSlice({
  name: 'toptab',
  initialState: {
    // topnavList: [{ key: 1, label: '首页', remark: '' }],
    topnavList: [{}],
  },
  reducers: {
    changeTopNavList: (state, action: PayloadAction<NavItem[]>) => {
      state.topnavList = action.payload
    },
  },
})

export const { changeTopNavList } = TopTabSlice.actions

export default TopTabSlice.reducer
