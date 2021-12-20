/**
 * https://redux-toolkit.js.org/tutorials/quick-start#create-a-redux-state-slice
 */
// #region Package (third-party)
// #region Redux
import { createSlice } from '@reduxjs/toolkit';
// #endregion
// #endregion

const initialState = {
  title: '',
  isHome: false,
};

export const layoutSlice = createSlice({
  name: 'Layout',
  initialState,
  reducers: {
    setLayoutTitle: (state, action) => {
      state.title = `${action.payload} – AI 4 Smart Healthcare`;
    },
    setHomeFlag: (state, action) => {
      state.isHome = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLayoutTitle, setHomeFlag } = layoutSlice.actions;

export default layoutSlice.reducer;
