//import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContact, filterContact } from "./actions";

const initialState = [

    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  
];
//  export const contactsReducer = (state = initialState, action)=> {
//   switch (action.type) {
//     case addContact.type:
//       return [...state, action.payload];
//          case deleteContact.type:
//       return state.filter(contact => contact.id !== action.payload);
//       //   case "contacts/filterContact":
//       // return state.filter(contact => contact.includs(e.target.value));
//        case "contacts/deleteAll":
//             return state([]);
//          default:
//       return state;
//     }
    
// }
export const contactsReducer = createReducer(initialState, {
  [addContact]: (state, {payload}) => [...state, payload],
        
  [deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
        
      
  //   case "contacts/filterContact":
  // return state.filter(contact => contact.includs(e.target.value));
  //  case "contacts/deleteAll":
  //       return state([]);
  //    default:
  // return state;
    
    
});
//const filter = '';

export const filterReducer = createReducer("", {
  
  [filterContact]: (_, { payload }) => payload,
    
      
    
  
})

// export const filterReducer = (state = filter, action) => {
//   switch (action.type) {
//     case filterContact.type:
//       return action.payload;
//     default: return state;
//   }
  
// }
//
// export const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
// });