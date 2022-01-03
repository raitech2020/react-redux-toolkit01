import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"

export const getContactsAsync = createAsyncThunk(
    "contacts/getContactsAsync",
    async () => {
        const resp = await fetch("http://localhost:8000/contacts")
        if (resp.ok) {
            const contacts = await resp.json()
            return {
                contacts: contacts
            }
        }
    }
)

const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        value: [],
        isLoading: false
    },
    reducers: {},
    extraReducers: {
        [getContactsAsync.pending]: (state) => {
            state.isLoading = true
        },
        [getContactsAsync.fulfilled]: (state, action) => {
            state.isLoading = false
            state.value = action.payload.contacts
        },
        [getContactsAsync.rejected]: (state) => {
            state.isLoading = false
        }
    }
})

export default contactsSlice.reducer



