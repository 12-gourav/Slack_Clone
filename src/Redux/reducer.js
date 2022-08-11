import {createReducer} from "@reduxjs/toolkit";

const user = createReducer({},{
    loginRequest:(state)=>{
        state.loading = true;
    
    },
    loginSuccess:(state,action)=>{
        state.loading = false;
       
        state.user = action.payload;
       

    },
    loginFail:(state,action)=>{
state.loading = false;
state.user = null;
state.error = action.payload;
    },
    clearError:(state)=>{
        state.error = null;
            },
            clearMessage:(state)=>{
        state.message = null;
            }
})

export default user;