import axios from 'axios';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GET_USED_LANGUAGES } from '../../queries/queries';

const initialState = {
    languages: [],
};

export const getRepositoryLanguages = createAsyncThunk('user/fetchRepositoryLanguages', async (props: { owner: string, repo: string }) => {
    try {
        const response = await axios.post(
            'https://api.github.com/graphql',
            {
                query: GET_USED_LANGUAGES,
                variables: { owner: props.owner, name: props.repo },
            },
            {
                headers: {
                    Authorization: `Bearer ${import.meta.env.VITE_GITHUB_ACCESS_TOKEN}`,
                    'Content-Type': 'application/json',
                },
            }
        );
        const { data: { data: { repository: { languages: { edges } } } } } = response

        return edges.map((item: any) => item.node)
    } catch (error) {
        console.error('Error:', error);
    }
}
);

const usedLanguagesSlice = createSlice({
    name: 'languages',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getRepositoryLanguages.fulfilled, (state, action) => {
                state.languages = action.payload;
            })
    }
})

export default usedLanguagesSlice.reducer;
