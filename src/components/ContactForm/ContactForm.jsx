
import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import s from './ContactForm.module.css';
import { toast, ToastContainer, Zoom } from 'react-toastify';
import { contactsSelector } from "../../redux/phonebook";
import 'react-toastify/dist/ReactToastify.css';
import Button from '@mui/material/Button';
// import { connect } from "react-redux";
import {contactsOperation} from '../../redux/phonebook'


export default function ContactForm() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const dispatch = useDispatch()
    const contacts= useSelector(contactsSelector.getContacts)
    const handleSubmit = (e) => {
        e.preventDefault();
        const duplicateContact = contacts.find(
    (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (duplicateContact) {
    toast.warning('Contact is already added !!!');
    return;
    }
        
        dispatch(contactsOperation.addContact(name, number));
        setName('');
        setNumber('');
        
    };

    return (
        <>
        <form className={s.form} onSubmit={handleSubmit}>
            <label className={s.label}>
                Name
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                    onChange={e=>setName(e.currentTarget.value)}
                    value={name}
                    className={s.input} />
            </label>
            <label className={s.label}>
                Number
                <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    required
                    onChange={e=>setNumber(e.currentTarget.value)}
                    value={number}
                    className={s.input} />
            </label>
            <Button variant="contained"   type="submit">Add contact</Button>
        </form>
            <ToastContainer transition={Zoom} autoClose={3000} />
            </>
    )
}
// const mapStateToProps = state => {
//     return {
//         contacts: contactsSelector.getContacts(state)
//     }
// }

// const mapDispatchToProps = dispatch => {
   
//   return {
//     onAddContact: ({name, number}) => dispatch(addContact({name, number})),
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
