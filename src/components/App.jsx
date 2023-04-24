import { useSelector } from "react-redux";
import ContactList from "./ContactList";
import ContactForm from "./ContactForm";
import Filter from "./Filter";
import IconButton from "./IconButton";
import {ReactComponent as AddIcon} from '../icons/add.svg';
import Modal from "./Modal";

export default function App() {
  const showModal = useSelector(state => state.modal);
  
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

      <IconButton  aria-label="Добавить contact">
        <AddIcon width="40" height="40" fill="#fff"/>
      </IconButton>

      {showModal && (
        <Modal>
          <ContactForm />
        </Modal>
      )}

      <h2 style={{
        fontSize: '40px',
        textShadow: '4px 4px 2px rgba(0,0,0,0.6)'}}
      >Contacts</h2>

      <Filter />
      <ContactList />
    </div>
  );
};