import React from 'react';
import ContactItem from 'components/ContactItem/ContactItem';

const ContactList = ({ contacts, handleDeleteContact }) => (
  <ul
    style={{
      width:520,
      height: 630,
      overflow: 'auto',
    }}
  >
    {contacts.map(contact => (
      <ContactItem
        key={contact.id}
        contact={contact}
        handleDeleteContact={handleDeleteContact}
      />
    ))}
  </ul>
);

export default ContactList;
