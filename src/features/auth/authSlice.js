import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isLoading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateUser(state, action) {
      state.user = action.payload;
    },
  },
  extraReducers: {},
});
export const { updateUser } = authSlice.actions;
export default authSlice.reducer;
