import { combineReducers } from '@reduxjs/toolkit'
import helloSlice from './hello'
import TopTabSlice from './toptab'
import ArticleTabSlice from './articletab'
import BookletAdvSlice from './bookletadv'

const rootReducers = combineReducers({
  hello: helloSlice,
  toptab: TopTabSlice,
  articletab: ArticleTabSlice,
  bookletadv: BookletAdvSlice,
})

export * from './hello'
export * from './toptab'
export * from './articletab'
export * from './bookletadv'

export default rootReducers
