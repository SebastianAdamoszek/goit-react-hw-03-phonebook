import React from 'react';
import css from './ContactForm.module.css';

const ContactForm = ({
  name,
  number,
  handleNameChange,
  handleNumberChange,
  handleSubmit,
}) => (
  <form onSubmit={handleSubmit}>
    <label>
      <p>Name:</p>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={handleNameChange}
      />
    </label>
    <label>
      <p> Number:</p>
      <input
        type="tel"
        name="number"
        pattern="[0-9+()-\s]+"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={handleNumberChange}
      />
    </label>
    <button className={css.button__add} type="submit">
      Add contact
    </button>
  </form>
);

export default ContactForm;
