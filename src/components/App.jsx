import { React } from 'react';
import { InputForm } from './InputForm/InputForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { Button } from './Button/Button';
import { useDispatch } from 'react-redux';
import { deleteAll } from 'redux/actions';

export const App = () => {
  // state = {
  //   contacts: [],
  //   filter: '',
  // };
  // addContact = newContact => {
  //   if (
  //     this.state.contacts.some(
  //       contact =>
  //         contact.name.toLocaleLowerCase() ===
  //         newContact.name.toLocaleLowerCase()
  //     )
  //   ) {
  //     alert(newContact.name + 'is already to contact');
  //   } else {
  //     this.setState(prevState => ({
  //       contacts: [newContact, ...prevState.contacts],
  //     }));
  //   }
  // };

  // filterHandler = e => {
  //   this.setState({ filter: e.target.value });
  // };

  // deleteContact = id => {
  //   this.setState(prevState => ({
  //     contacts: prevState.contacts.filter(contact => contact.id !== id),
  //   }));
  // };

  // showFilteredContacts = () => {
  //   return this.state.contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
  //   );
  // };
  // componentDidMount() {
  //   const contactSet = localStorage.getItem('contacts');
  //   const parsedContact = JSON.parse(contactSet);
  //   if (parsedContact) {
  //     this.setState({ contacts: parsedContact });
  //   }
  // }
  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }
  const dispatch = useDispatch();

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
      <Button onClick={() => dispatch(deleteAll())}>Delete all</Button>
      <InputForm />
      <Filter />
      <ContactList />

      {/* <InputForm onSubmit={this.addContact} />
        {this.state.contacts === 0 ? (
          <p>There are no contacts</p>
        ) : (
          <>
            <Filter onInputHandler={this.filterHandler}></Filter>
            <ContactList
              deleteContact={this.deleteContact}
              filteredContacts={this.showFilteredContacts()}
            ></ContactList>
          </>
        )} */}
    </div>
  );
};
