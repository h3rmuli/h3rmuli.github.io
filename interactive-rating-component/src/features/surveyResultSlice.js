import { createSlice } from '@reduxjs/toolkit';

export const surveyResultSlice = createSlice({
  name: 'survey',
  initialState: {
    value: 0,
  },
  reducers: {
    setPoints: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setPoints } = surveyResultSlice.actions;

export const selectSurveyResult = (state) => state.survey.value;

export default surveyResultSlice.reducer;
