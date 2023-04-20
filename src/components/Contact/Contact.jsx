import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';
import PropTypes from 'prop-types';
import { ContactText, DeleteBtn } from "./Contact.styled";

const Contact = ({name, number, id}) => {
    const dispatch = useDispatch();

    return (
    <>
        <ContactText>{name}: {number}</ContactText>
        <DeleteBtn type="button" onClick={() => dispatch(deleteContact(id))}>Delete</DeleteBtn>
    </>
)};

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};

export default Contact;