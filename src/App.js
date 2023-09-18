
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ContactList from './Components/ContactList/ContactList';
import ContactForm from './Components/ContactForm/ContactForm';

const initialContacts = JSON.parse(localStorage.getItem('contacts')) || [];

const AppWrapper = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width:100%;
  width: 100%;
  border: none;
`;

const AddButton = styled.button`
  background-color: #d9d9d9;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  margin-top: 20px; 
  margin-bottom: 20px; 
  cursor: pointer;
`;

const App = () => {
  const [contacts, setContacts] = useState(initialContacts);
  const [selectedContact, setSelectedContact] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const isPhoneNumberUnique = (phoneNumber) => {
    return !contacts.some((contact) => contact.phoneNumber === phoneNumber);
  };

  const handleSaveContact = (contactData) => {
    if (isEditing) {
      const updatedContacts = contacts.map((contact) =>
        contact.phoneNumber === contactData.phoneNumber ? contactData : contact
      );
      setContacts(updatedContacts);
      setIsEditing(false);
    } else {
      if (!isPhoneNumberUnique(contactData.phoneNumber)) {
        alert('Phone number must be unique. This phone number already exists.');
        return;
      }

      setContacts([...contacts, contactData]);
    }
    setSelectedContact(contactData);
  };

  const handleViewContact = (contact) => {
    setSelectedContact(contact);
    setIsEditing(false);
  };

  const handleEditContact = (contact) => {
    setSelectedContact(contact);
    setIsEditing(true);
  };

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <AppWrapper>
      <h1>Contact Management App</h1>
    
      <ContactList
        contacts={contacts}
        onViewContact={handleViewContact}
        onEditContact={handleEditContact}
      />

      <AddButton onClick={toggleFormVisibility}>
        {isFormVisible ? 'Hide Form' : 'Add New Contact'}
      </AddButton>

      {isFormVisible && <ContactForm contact={selectedContact} onSaveContact={handleSaveContact} />}
    </AppWrapper>
  );
};

export default App;
