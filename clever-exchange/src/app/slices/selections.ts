import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const TEST_SLICE = createSlice({
  name: 'testSlice',
  initialState: { test: { id: '1', name: 'test 01' } },
  reducers: {
    setTests: (state, action: PayloadAction<any>) => {
      state.test = action.payload as any;
    },
  },
});

export const { setTests } = TEST_SLICE.actions;

export default TEST_SLICE.reducer;
