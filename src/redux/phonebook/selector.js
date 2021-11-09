import {createSelector} from '@reduxjs/toolkit'

 const getContacts = state => state.contacts.items;
const getFilter = state => state.contacts.filter;
 const getLoading = state => state.contacts.loading;

 const getVisibleContacts = createSelector(
    [getContacts, getFilter],
    (contacts, filter) => {
        const normilizedFilter = filter.toLowerCase();
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(normilizedFilter));
    }
)

const contactsSelector = {
    getContacts,getFilter,getVisibleContacts,getLoading
}
 export default contactsSelector