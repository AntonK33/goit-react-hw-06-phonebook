import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { List } from './List';
import { getContacts } from 'redux/selectors';
import { getFilterContact } from 'redux/selectors';

//import { deleteContact } from 'redux/actions';

// export const filterContacts = e => {
//   const filterValue = e.target.value;
//   console.log(filterValue);
// };

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const FilterCont = useSelector(getFilterContact);
  const filterList = contacts.filter(({ name }) =>
    name.toLowerCase().includes(FilterCont)
  );
  return (
    <>
      <h2 className={css.contacts_h}>Contacts</h2>
      <ul className={css.filter_list}>
        {filterList.map(contact => {
          return (
            <List contact={contact} />
            // <li key={contact.id} className={css.filter_item}>
            //   <p className={css.filter_p}>
            //     {contact.name}: {contact.number}
            //   </p>
            //   <button
            //     onClick={() => dispatch(deleteContact(contact.id))}
            //     className={css.deleteContactBtn}
            //   >
            //     Delete
            //   </button>
            // </li>
          );
        })}
      </ul>
    </>
  );
};

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
