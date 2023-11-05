
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export interface CategoryState {
  checks: string[];
}

const initialState: CategoryState = {
    checks: [],
};


const checkListSlice = createSlice({
  name: 'checkList',
  initialState,
  reducers: {
        pushCheck(state, action: PayloadAction<string>) {
            state.checks.push(action.payload);
        },
        removeCheck(state, action: PayloadAction<string>) {
            state.checks = state.checks.filter((check) => check !== action.payload);
        },
  },
  
});

export const { pushCheck,removeCheck } = checkListSlice.actions;

export default checkListSlice.reducer;