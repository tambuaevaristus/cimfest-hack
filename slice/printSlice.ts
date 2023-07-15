import { PrintOption } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Interface } from "readline";

interface PrintState {
  printOptions: PrintOption[] | null;
}
const initialState: PrintState = {
  printOptions: [],
};

export const printSlice = createSlice({
  name: "print",
  initialState,
  reducers: {
    addprint: (state, action: PayloadAction<PrintOption>) => {
      state.printOptions?.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addprint } = printSlice.actions;

export default printSlice.reducer;
