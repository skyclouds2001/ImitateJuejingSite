import { combineReducers } from '@reduxjs/toolkit'
import TopTabSlice from './toptab'
import ArticleTabSlice from './articletab'

const rootReducers = combineReducers({
  toptab: TopTabSlice,
  articletab: ArticleTabSlice,
})

export * from './toptab'
export * from './articletab'

export default rootReducers
