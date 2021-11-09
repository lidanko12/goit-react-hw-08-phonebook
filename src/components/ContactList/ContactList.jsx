
import s from './ContactList.module.css'
import { contactsSelector } from "../../redux/phonebook";
import { connect } from 'react-redux';
import ContactListItem from '../ContactLIstItem/ContactListItem';


const ContactList = ({contacts}) => (
    <ul className={s.list}>
        {contacts.map((contacts)=> (
            <li key={contacts.id}  >
                <ContactListItem contacts={contacts}/>
            </li>
        ))}
    </ul>
)

const mapStateToProps = (state) => {
    return {
        contacts: contactsSelector.getVisibleContacts(state)
    }
  }

export default connect(mapStateToProps, null)(ContactList);
