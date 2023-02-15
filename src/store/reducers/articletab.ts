import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'
import { ArtNavItem } from '@/interface/nav'

const ArticleTabSlice = createSlice({
  name: 'articletab',
  initialState: {
    // topnavList: [{ key: 1, label: '首页', remark: '' }],
    artnavList: [{ key: 1, label: '首页' }],
    selectkey: 'recommended',
  },
  reducers: {
    changeArticleNavList: (state, action: PayloadAction<ArtNavItem[]>) => {
      state.artnavList = action.payload
    },
    changeArticleselectkey: (state, action: PayloadAction<string>) => {
      state.selectkey = action.payload
    },
  },
})

export const { changeArticleNavList, changeArticleselectkey } = ArticleTabSlice.actions

export default ArticleTabSlice.reducer
