import { createSlice } from '@reduxjs/toolkit'

import { fetchChatList } from './asyncAction'


const initialState = {
  isLoading: false,
  chatlist: [],
  error: '',
}

export const ChatListSlice = createSlice({
  name: 'ChatList',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchChatList.fulfilled.type]: (state, action) => {
      state.isLoading = false
      state.error = ''
      state.chatlist = action.payload
    },
    [fetchChatList.pending.type]: (state) => {
      state.isLoading = true
    },
    [fetchChatList.rejected.type]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
      state.chatlist = []
    },
  },
})
export default ChatListSlice.reducer
