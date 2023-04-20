import { React } from 'react';
import { InputForm } from './InputForm/InputForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <InputForm />
      <Filter />
      <ContactList />
    </div>
  );
};
