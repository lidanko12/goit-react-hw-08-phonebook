import React from 'react';

import { connect } from 'react-redux';
import {deleteContact} from '../../redux/phonebook/phonebook-operations'
import s from './ContactListItem.module.css';
import Loader from 'react-loader-spinner';
import Button from '@mui/material/Button';


const ContactListItem = ({contacts, onDeleteContact ,isDeleting }) => (
    <div className={s.item}>
        <p className={s.contact}>
            <span className={s.list}>{contacts.name}:
            </span>
            <span className={s.list}>{contacts.number}
            </span>
        </p>
    <Button variant="contained"  type="button"  onClick={() => onDeleteContact(contacts.id)} disabled={isDeleting}>
      {isDeleting ?( <Loader
                                type="ThreeDots"
                                color="#000000"
                                height={15}
                                width={15}
                            />):'Delete'} </Button>
    </div> 
)

const mapDispatchToProps = dispatch => {
  return {
    onDeleteContact: (contactId) => dispatch(deleteContact(contactId)),
  }
}

export default connect(null, mapDispatchToProps)(ContactListItem);
{/* <li className={s.listItem} key={id}>
            {`${name}: ${number}`}
            <button className={s.btn}
                type="button" onClick={() => deleteContact(id)} disabled={isDeleting}>
                {isDeleting ?( <Loader
                                type="ThreeDots"
                                color="#000000"
                                height={15}
                                width={15}
                            />):'Delete'} </button>
        </li> */}