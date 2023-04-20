import { useState} from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { createContact} from "redux/contactSlice";
import { nanoid } from 'nanoid';
import ContactList from "./ContactList";
import ContactForm from "./ContactForm";
import Filter from "./Filter";
import IconButton from "./IconButton";
import {ReactComponent as AddIcon} from '../icons/add.svg';
import Modal from "./Modal";

export default function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contact);
  console.log(contacts)

  const filter = useSelector(state => state.filter);
  console.log(filter);

  const [showModal, setShowModal] = useState(false);

  const visibleContacts = getVisibleContacts();

  const duplicateContact = name => {
    return contacts.find(contact => 
      contact.name === name);
  };

  const formSubmitHandler = (name, number) => {
    if(duplicateContact(name)){
      return alert(`${name} is already in contacts`);
    }

        const contact = {
          id: nanoid(),
          name,
          number,
        };

        dispatch(createContact(contact));
        toggleModal();
  };

  function getVisibleContacts() {
    const normalizedFilter = filter.toLowerCase();
    console.log(contacts);

    return contacts.filter(({name}) => 
      name.toLowerCase().includes(normalizedFilter));
  };

  function toggleModal() {
    setShowModal(prev => !prev);
  };
  
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '40px',
        fontSize: 40,
        color: '#ffffff'
      }}
    >
      <h1 style={{
        fontSize: '40px',
        textShadow: '4px 4px 2px rgba(0,0,0,0.6)'}}
      >Phonebook</h1>

      <IconButton onClick={toggleModal} aria-label="Добавить contact">
        <AddIcon width="40" height="40" fill="#fff"/>
      </IconButton>

      {showModal && (
        <Modal onClose={toggleModal}>
          <ContactForm onSubmit={formSubmitHandler}/>
        </Modal>
      )}

      <h2 style={{
        fontSize: '40px',
        textShadow: '4px 4px 2px rgba(0,0,0,0.6)'}}
      >Contacts</h2>

      <Filter value={filter}/>
      <ContactList options={visibleContacts} />
    </div>
  );
};