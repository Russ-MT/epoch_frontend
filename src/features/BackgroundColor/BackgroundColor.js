import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bgColor: "white",
  id: "",
  isClicked: false,
  isAnimation: false,
};

const bgColorSlice = createSlice({
  name: "bgColor",
  initialState,
  reducers: {
    changeBgColor(state, action) {
      if (action.payload) {
        state.bgColor = action.payload;
      } else {
        state.bgColor = "white";
      }
    },

    triggerDetails(state, action) {
      state.id = action.payload.id;
      state.isClicked = action.payload.click;
    },

    triggerAnimation(state, action) {
      state.isAnimation = action.payload;
    },
  },
});

export const { changeBgColor, triggerDetails, triggerAnimation } =
  bgColorSlice.actions;
export default bgColorSlice.reducer;
