/**
 * https://redux-toolkit.js.org/tutorials/quick-start#create-a-redux-state-slice
 */
// #region Package (third-party)
// #region Redux
import { createSlice } from '@reduxjs/toolkit';
// #endregion
// #endregion

const initialState = {
  label: 'Trang chủ',
};

export const MenuSlice = createSlice({
  name: 'Menu',
  initialState,
  reducers: {
    setLabel: (state, action) => {
      state.label = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLabel } = MenuSlice.actions;

export default MenuSlice.reducer;
