//import { createStore } from "redux";
//import { devToolsEnhancer } from "@redux-devtools/extension";
//import { rootReducer } from "./reducer"
import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer, filterReducer } from "./reducer";
//import { statusFilters } from "./constants";
// const initialState = {
//   contacts: [
//     {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
//     {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//     {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//     {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
//   ],
//   // filters: {
//   //   status: statusFilters.all,
//   // },
// };
// const rootReducer = (state = initialState, action) => {
//   return state;
// };

//const enhancer = devToolsEnhancer();
export const store = configureStore({
    reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
}});