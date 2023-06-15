import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    repositories: []
};

const cardSlice = createSlice({
    name: 'repositories',
    initialState,
    reducers: {
        updateState: (state, { payload }) => {
            return { ...state, repositories: payload }
        }
    }
})

export const { updateState } = cardSlice.actions;
export default cardSlice.reducer;
