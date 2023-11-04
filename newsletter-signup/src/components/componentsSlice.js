import { createSlice } from '@reduxjs/toolkit';

export const componentsSlice = createSlice({
  name: 'components',
  initialState: {
    value: {
      content: true,
      thankYou: false,
    },
  },
  reducers: {
    cmpShow: (state, action) => {
      state.value[action.payload] = true;
    },
    cmpHide: (state, action) => {
      state.value[action.payload] = false;
    },
  },
});

export const { cmpShow, cmpHide } = componentsSlice.actions;

export default componentsSlice.reducer;
