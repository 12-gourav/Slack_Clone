import {configureStore} from "@reduxjs/toolkit";
import user from "./reducer";

const store = configureStore({
reducer:{
    auth:user,
   
}
});

export default store;