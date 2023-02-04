import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'
import { ArtNavItem } from '@/interface/nav'

const ArticleTabSlice = createSlice({
  name: 'articletab',
  initialState: {
    // topnavList: [{ key: 1, label: '首页', remark: '' }],
    artnavList: [{ key: 1, label: '首页' }],
  },
  reducers: {
    changeArticleNavList: (state, action: PayloadAction<ArtNavItem[]>) => {
      state.artnavList = action.payload
    },
  },
})

export const { changeArticleNavList } = ArticleTabSlice.actions

export default ArticleTabSlice.reducer
