import { combineReducers } from '@reduxjs/toolkit'
import helloSlice from './hello'
import TopTabSlice from './toptab'
import ArticleTabSlice from './articletab'

const rootReducers = combineReducers({
  hello: helloSlice,
  toptab: TopTabSlice,
  articletab: ArticleTabSlice,
})

export * from './hello'
export * from './toptab'
export * from './articletab'

export default rootReducers
