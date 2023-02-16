import { combineReducers } from '@reduxjs/toolkit'
import TopTabSlice from './toptab'
import ArticleTabSlice from './articletab'
import BookletAdvSlice from './bookletadv'

const rootReducers = combineReducers({
  toptab: TopTabSlice,
  articletab: ArticleTabSlice,
  bookletadv: BookletAdvSlice,
})

export * from './toptab'
export * from './articletab'
export * from './bookletadv'

export default rootReducers
