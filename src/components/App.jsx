import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import imgage from '../image/image.module.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ],
      name: '',
      number: '',
      filter: '',
    };
  }

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };

  handleNumberChange = e => {
    this.setState({ number: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { contacts, name, number } = this.state;

    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already a contact!`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState({
      contacts: [...contacts, newContact],
      name: '',
      number: '',
    });
  };

  handleFilterChange = e => {
    this.setState({ filter: e.target.value });
  };

  handleDeleteContact = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
  };

  render() {
    const { name, number, filter, contacts } = this.state;

    return (
      <div
        className={imgage.background}
        style={{
          width: 900,
          height: 900,
          display: 'flex',
          justifyContent: 'start',
          alignItems: 'start',
          gap: 60,
          fontSize: 30,
          color: '#010101',
          margin: 20,
          padding: 20,
          border: '10px solid darkgray',
          borderRadius: 15,
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'start',
            flexDirection: 'column',
          }}
        >
          <h1>Phonebook</h1>
          <ContactForm
            name={name}
            number={number}
            handleNameChange={this.handleNameChange}
            handleNumberChange={this.handleNumberChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
        <div
          style={{
            marginTop: 13,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'start',
            flexDirection: 'column',
            gap: 30,
          }}
        >
          <div>
            <h2 style={{ marginBottom: 4 }}>Contacts</h2>
            <Filter
              filter={filter}
              handleFilterChange={this.handleFilterChange}
            />
          </div>
          <div>
            <h2 style={{ marginTop: '25px' }}>Contact list</h2>
            <ContactList
              contacts={contacts.filter(contact =>
                contact.name.toLowerCase().includes(filter.toLowerCase())
              )}
              handleDeleteContact={this.handleDeleteContact}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
