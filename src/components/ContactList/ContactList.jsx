import { useSelector } from "react-redux";
import Contact from 'components/Contact';
import { 
    ContactWrap, 
    ContactItem 
} from "./ContactList.styled";

const ContactList = () => {
    const contacts = useSelector(state => state.contact);
    const filter = useSelector(state => state.filter);

    const visibleContacts = getVisibleContacts();

    function getVisibleContacts() {
        const normalizedFilter = filter.toLowerCase();

        return contacts.filter(({name}) => 
            name.toLowerCase().includes(normalizedFilter));
    };

    return (
    <ContactWrap>
        {visibleContacts.map(({id, name, number}) => (
            <ContactItem key={id}>
                <Contact name={name} number={number} id={id}/>
            </ContactItem>
        ))}
    </ContactWrap>
)};

export default ContactList;