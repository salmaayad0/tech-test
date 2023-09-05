import { configureStore } from '@reduxjs/toolkit'
import postsSlice from './slices/posts'
import commentsSlice from './slices/comments'
import authslice from './slices/authslice'

export const store = configureStore({
  reducer: {
    postsSlice,
    commentsSlice,
    authslice
  },
})