import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createContact} from "redux/contactSlice";
import { toggleModal } from "redux/modalSlice";
import { nanoid } from 'nanoid';
import { 
    FormWrap, 
    LabelWrap, 
    LabelText, 
    FormInput, 
    AddBtn 
} from "./ContactForm.styled";

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  
  const contacts = useSelector(state => state.contact);
  const modal = useSelector(state => state.modal)
  const dispatch = useDispatch();

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
        dispatch(toggleModal(modal));
  };

  const handleChange = evt => {
    const {name, value} = evt.target;
    
    switch(name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  }

  const handleSubmit = evt => {
    evt.preventDefault();

    formSubmitHandler(name, number);
    setName('');
    setNumber('');
  }


  return (
    <FormWrap onSubmit={handleSubmit}>
      <LabelWrap htmlFor="name">
        <LabelText>Name</LabelText>
        <FormInput
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </LabelWrap>

      <LabelWrap htmlFor="number">
        <LabelText>Number</LabelText>
        <FormInput
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </LabelWrap>

      <AddBtn type="submit">Add contact</AddBtn>
    </FormWrap>
    );
};
