import { combineReducers } from '@reduxjs/toolkit'
import helloSlice from './hello'

const rootReducers = combineReducers({
  hello: helloSlice,
})

export * from './hello'

export default rootReducers
