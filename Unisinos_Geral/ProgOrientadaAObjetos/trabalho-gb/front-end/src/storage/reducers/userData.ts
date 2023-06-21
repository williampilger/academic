/**
 * Authenty AE - Bom Princípio-RS  |  github.com/authentyAE
 * by: will.i.am                   |  github.com/williampilger
 *
 * 2022 - Bom Princípio - RS
 */
import { createSlice } from "@reduxjs/toolkit";

import { session_type } from "../../api/types";

const initialState: session_type = {
    SSID: '',
    employee: {
        id: 0, 
        fullname: '',
        email: '',
        cpf: '',
        phone: '',
        role: "Generic Employee",
        isAdm: false
    }
}

const userDataSlice = createSlice({
    name: 'userData',
    initialState,
    reducers: {
        setUserData(state, action:{payload:session_type}){
            state = action.payload;
            return state;
        },
        logout(state){
            // state = initialState;
            return initialState;
        }
    }
})

export const { setUserData, logout } = userDataSlice.actions;
export default userDataSlice.reducer;