import { configureStore } from '@reduxjs/toolkit';
import repositoriesSlice from './slices/repositories';
import userSlice from './slices/user';

const store = configureStore({
    reducer: {
        reposReducer: repositoriesSlice,
        userReducer: userSlice
    }
});

export default store;
export type AppDispatch = typeof store.dispatch;
