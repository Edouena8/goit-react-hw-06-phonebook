import PropTypes from 'prop-types';
import Contact from 'components/Contact';
import { 
    ContactWrap, 
    ContactItem 
} from "./ContactList.styled";

const ContactList = ({options}) => (
    <ContactWrap>
        {options.map(({id, name, number}) => (
            <ContactItem key={id}>
                <Contact name={name} number={number} id={id}/>
            </ContactItem>
        ))}
    </ContactWrap>
);

ContactList.propTypes = {
    options: PropTypes.array.isRequired,
}

export default ContactList;