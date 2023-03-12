import { createSlice } from '@reduxjs/toolkit'
import { fetchMessages } from './asyncAction'


const initialState = {
  isLoading: false,
  selectedChat: null,
  mesages: [],
  oldMessages: [],
  newMessages: [],
  error: '',
}

export const MessageSlice = createSlice({
  name: 'Messages',
  initialState,
  reducers: {
    selectChat(state, action) {
      state.selectedChat = action.payload
    },
  },
  extraReducers: {
    [fetchMessages.fulfilled.type]: (state, action) => {
      state.isLoading = false
      state.error = ''
      state.mesages = action.payload
      state.oldMessages = action.payload.filter((m) => !m.is_new)
      state.newMessages = action.payload.filter((m) => m.is_new)
    },
    [fetchMessages.pending.type]: (state) => {
      state.isLoading = true
    },
    [fetchMessages.rejected.type]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
      state.mesages = []
    },
  },
})
export default MessageSlice.reducer
