import React from 'react';
import { Container } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList ';
import { Filter } from 'components/Filter/Filter';
export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  addContact = data => {
    // const { contacts } = this.state;
    console.log(data);
  };
  render() {
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter />
        <ContactList contacts={this.state.contacts} />
      </Container>
    );
  }
}
