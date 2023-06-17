import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { GET_SEARCH_REPOSITORIES } from '../../queries/queries';

export const searchRepositories = createAsyncThunk('repositories/fetch', async (searchTerm: string) => {
    const variables = {
        queryString: searchTerm
    };

    const headers = {
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_ACCESS_TOKEN}`,
        'Content-Type': 'application/json'
    };

    try {
        const response = await axios.post(
            'https://api.github.com/graphql',
            { query: GET_SEARCH_REPOSITORIES, variables },
            { headers }
        );

        const repositoryData = response.data.data.search.edges.map(
            (edge: any) => edge.node
        );

        return repositoryData;
    } catch (error) {
        console.error('Error:', error);
    }

})

const initialState = {
    repositories: [],
    loading: false
};

const cardSlice = createSlice({
    name: 'repositories',
    initialState,
    reducers: {
        updateState: (state, { payload }) => {
            return { ...state, repositories: payload }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(searchRepositories.pending, (state) => {
                state.loading = true;
            })
            .addCase(searchRepositories.fulfilled, (state, action) => {
                state.loading = false;
                state.repositories = action.payload;
            })
            .addCase(searchRepositories.rejected, (state) => {
                state.loading = false;
            })
    }
})

export const { updateState } = cardSlice.actions;
export default cardSlice.reducer;
