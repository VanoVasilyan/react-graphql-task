import axios from 'axios';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GET_REPOSITORY_INFO } from '../../queries/queries';

const initialState = {
    user: [],
};

export const fetchUserInfo = createAsyncThunk('user/fetchUserInfo', async (username: string) => {
    try {
        const response = await axios.post(
            'https://api.github.com/graphql',
            {
                query: GET_REPOSITORY_INFO,
                variables: { login: username },
            },
            {
                headers: {
                    Authorization: `Bearer ${import.meta.env.VITE_GITHUB_ACCESS_TOKEN}`,
                    'Content-Type': 'application/json',
                },
            }
        );

        return response.data.data.user;
    } catch (error) {
        console.error('Error:', error);
    }
}
);

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserInfo.fulfilled, (state, action) => {
                state.user = action.payload;
            })
    }
})

export default userSlice.reducer;
