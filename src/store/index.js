import { combineReducers, configureStore } from '@reduxjs/toolkit'
import ChatList from './reducers/ChatListSlice'
import Messages from './reducers/MessagesSlice'

const rootReducer = combineReducers({
  ChatList,
  Messages,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}
