import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counterSlice';
import surveyResultReducer from './features/surveyResultSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    survey: surveyResultReducer,
  },
});
