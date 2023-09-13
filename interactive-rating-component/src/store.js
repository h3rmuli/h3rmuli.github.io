import { configureStore } from '@reduxjs/toolkit';
import surveyResultReducer from './features/surveyResultSlice';

export default configureStore({
  reducer: {
    survey: surveyResultReducer,
  },
});
