import { configureStore } from '@reduxjs/toolkit';
import repositoriesSlice from './slices/repositories';
import userSlice from './slices/user';
import usedLanguagesSlice from './slices/usedLanguages';

const store = configureStore({
    reducer: {
        reposReducer: repositoriesSlice,
        userReducer: userSlice,
        languagesReducer: usedLanguagesSlice
    }
});

export default store;
export type AppDispatch = typeof store.dispatch;
