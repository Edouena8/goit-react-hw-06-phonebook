import { useState } from "react";
import PropTypes from "prop-types";
import { 
    FormWrap, 
    LabelWrap, 
    LabelText, 
    FormInput, 
    AddBtn 
} from "./ContactForm.styled";

export default function ContactForm({onSubmit}) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

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

    onSubmit(name, number);
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
    )
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
