import { configureStore } from '@reduxjs/toolkit';
import repositoriesSlice from './slices/repositories';

const store = configureStore({
    reducer: {
        reposReducer: repositoriesSlice
    }
});

export default store;
export type AppDispatch = typeof store.dispatch;
