/**
 * Authenty AE - Bom Princípio-RS  |  github.com/authentyAE
 * by: will.i.am                   |  github.com/williampilger
 * 
 * 2023.06.20 - Bom Princípio - RS
 * ♪ Pérsês | BEATSMACH
 */

import { configureStore } from '@reduxjs/toolkit';
import softwareStatesReducer from './reducers/softwareStates';
import userDataReducer from './reducers/userData';

export const store = configureStore({
    reducer: {
        userData: userDataReducer,
        softwareStates: softwareStatesReducer
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;