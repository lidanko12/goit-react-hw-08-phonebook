import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../components/Conteiner';
import ContactList from '../components/ContactList';
import Filter from '../components/Filter';
import ContactForm from '../components/ContactForm';
import { contactsOperation, contactsSelector } from '../redux/phonebook';
const barStyles = {
  display: 'flex',
  alignItems: 'flex-end',
  marginBottom: 20,
};

export default function ContactsView(params) {
  const dispatch = useDispatch();
  const isLoadingContact = useSelector(contactsSelector.getLoading);

  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const toggleModal = () => setIsModalOpen(state => !state);

  useEffect(() => dispatch(contactsOperation.fetchContacts()), [dispatch]);

  return (
    <Container>
      <div style={barStyles}>

        {isLoadingContact && <h1>Загружаем...</h1>}
      </div>
      <ContactForm />
      <Filter />
        <ContactList />
    </Container>
  );
}