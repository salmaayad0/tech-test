import { configureStore } from '@reduxjs/toolkit'
import postsSlice from './slices/posts'
import commentsSlice from './slices/comments'

export const store = configureStore({
  reducer: {
    postsSlice,
    commentsSlice
  },
})