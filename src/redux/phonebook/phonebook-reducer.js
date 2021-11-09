import { createReducer } from "@reduxjs/toolkit";
import {addContactSuccess,deleteContactSuccess,fetchContactSuccess,changeFilter } from './phonebook-actions';
import { combineReducers } from "redux";

const items = createReducer([], {
    [fetchContactSuccess]: (_, { payload }) =>payload,
    [deleteContactSuccess]: (state, {payload}) =>
        state.filter(({ id }) => id !== payload),
    [addContactSuccess]:(state, {payload}) => [payload, ...state],
});

const filter = createReducer('', {
    [changeFilter]: (_, { payload }) => payload
});


export default combineReducers({
    items,
    filter
})
