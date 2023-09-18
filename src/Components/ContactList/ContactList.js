
import React, { useState, useMemo } from 'react';
import { ListContainer } from './styles'; 

const ContactList = ({ contacts, onViewContact }) => {
  const [filterText, setFilterText] = useState('');
  const [sortField, setSortField] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  const [selectedContact, setSelectedContact] = useState(null);

  const filteredContacts = useMemo(() => {
    return contacts.filter((contact) =>
      contact.fullName.toLowerCase().includes(filterText.toLowerCase())
    );
  }, [contacts, filterText]);

  const sortedContacts = useMemo(() => {
    if (sortField) {
      return [...filteredContacts].sort((a, b) => {
        const aValue = a[sortField];
        const bValue = b[sortField];

        if (sortOrder === 'asc') {
          return aValue.localeCompare(bValue);
        } else {
          return bValue.localeCompare(aValue);
        }
      });
    }
    return filteredContacts;
  }, [filteredContacts, sortField, sortOrder]);

  const handleSort = (field) => {
    setSortField(field);
    setSortOrder(sortField === field ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc');
  };

  const toggleContactCard = (contact) => {
    setSelectedContact(selectedContact === contact ? null : contact);
  };

  const tableColumns = [
    { field: 'fullName', label: 'Full Name' },
    { field: 'email', label: 'Email' },
    { field: 'age', label: 'Age' },
    { field: 'phoneNumber', label: 'Phone Number' },
  ];

  return (
    <ListContainer>
      <input
        type="text"
        placeholder="Filter by name..."
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            {tableColumns.map((column) => (
              <th key={column.field} onClick={() => handleSort(column.field)}>
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedContacts.map((contact) => (
            <React.Fragment key={contact.phoneNumber}>
              <tr onClick={() => toggleContactCard(contact)}>
                {tableColumns.map((column) => (
                  <td key={column.field}>{contact[column.field]}</td>
                ))}
              </tr>
              {selectedContact === contact && (
                <tr>
                  <td colSpan={tableColumns.length}>
                    <div className="contact-card">
                      {tableColumns.map((column) => (
                        <div key={column.field}>
                          {column.label}: {contact[column.field]}
                        </div>
                      ))}
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </ListContainer>
  );
};

export default ContactList;
