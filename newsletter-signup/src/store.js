import { configureStore } from '@reduxjs/toolkit';
import emailReducer from './components/emailSlice';
import componentReducer from './components/componentsSlice';

export default configureStore({
  reducer: {
    email: emailReducer,
    components: componentReducer,
  },
});
