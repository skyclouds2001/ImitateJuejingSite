import { combineReducers } from '@reduxjs/toolkit'
import ArticleTabSlice from './article-tab'

const rootReducers = combineReducers({
  'article-tab': ArticleTabSlice,
})

export * from './article-tab'

export default rootReducers
