import React from 'react';
import { Container, Title } from './App.styled';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList ';
import { Filter } from 'components/Filter/Filter';
import { nanoid } from 'nanoid';
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
  handleAddContact = data => {
    const newObject = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };
    if (newObject.name !== this.state.contacts.name) {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newObject],
      }));
    } else {
      window.alert(`${newObject.name} is already in contacts.`);
    }
  };

  handleDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleAddContact} />
        <Title>Contacts</Title>
        <Filter />
        <ContactList
          contacts={this.state.contacts}
          onDeleteContact={this.handleDeleteContact}
        />
      </Container>
    );
  }
}
