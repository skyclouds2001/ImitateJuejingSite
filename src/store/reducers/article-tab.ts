import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

const ArticleTabSlice = createSlice({
  name: 'article-tab',
  initialState: {
    'select-key': 'recommended',
  },
  reducers: {
    changeArticleSelectKey: (state, action: PayloadAction<string>) => {
      state['select-key'] = action.payload
    },
  },
})

export const { changeArticleSelectKey } = ArticleTabSlice.actions

export default ArticleTabSlice.reducer
