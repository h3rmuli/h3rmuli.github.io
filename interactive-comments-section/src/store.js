import { configureStore } from '@reduxjs/toolkit';
import commentsReducer from './features/commentsSlice';

export default configureStore({
  reducer: {
    posts: commentsReducer,
  },
});
