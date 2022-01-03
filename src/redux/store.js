import {configureStore} from "@reduxjs/toolkit"
import counterReducer from "./counterSlice"
import contactsReducer from "./contactsSlice"

export default configureStore({
    reducer: {
        counter: counterReducer,
        contacts: contactsReducer
    }
})
