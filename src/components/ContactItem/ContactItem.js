import React from 'react';
import css from './ContactItem.module.css'

const ContactItem = ({ contact, handleDeleteContact }) => (
  <li key={contact.id}>
        <p className={css.list__style}></p>
        <p className={css.contact}>{contact.name}: {contact.number}</p>
        <button className={css.button__del} onClick={() => handleDeleteContact(contact.id)}>Delete</button>
      </li>
);

export default ContactItem;
