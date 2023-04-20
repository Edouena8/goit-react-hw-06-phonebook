import { createSlice } from '@reduxjs/toolkit';

export const contactSlice = createSlice({
    name: "contact",
    initialState: [],
    reducers: {
        createContact: (state, action) => {
            return [...state, action.payload];
        },

        deleteContact: (state, action) => {
            return state.filter(contact => contact.id !== action.payload);
        },
    },

});

export const {createContact, deleteContact} = contactSlice.actions;