import { configureStore } from "@reduxjs/toolkit";

import applicationSlice from "./applicationSlice";
import authorizationSlice from "./authorizationSlice";
 
const reducer = configureStore({
    reducer: {
        authorization: authorizationSlice,
        application: applicationSlice
    }
})

export default reducer;