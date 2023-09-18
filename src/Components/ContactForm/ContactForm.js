
import React, { useState, useEffect } from 'react';
import { FormContainer } from './styles';

const ContactForm = ({ contact, onSaveContact }) => {
  const [formData, setFormData] = useState({ ...contact });

  useEffect(() => {
    setFormData({ ...contact });
  }, [contact]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSaveContact(formData);
  };
  
  const inputFields = [
    { name: 'fullName', label: 'Full Name', type: 'text', required: true },
    { name: 'email', label: 'Email', type: 'text', required: true },
    { name: 'age', label: 'Age', type: 'number', required: true },
    { name: 'phoneNumber', label: 'Phone Number', type: 'text', required: true },
    { name: 'notes', label: 'Notes', type: 'textarea', required: false },
  ];

  return (
    <FormContainer onSubmit={handleSubmit}>
      {inputFields.map((field) => (
        <label key={field.name}>
          {field.type === 'textarea' ? (
            <textarea
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              placeholder={field.label}
            />
          ) : (
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              required={field.required}
              placeholder={field.label}
            />
          )}
        </label>
      ))}
      <button type="submit">Save</button>
    </FormContainer>
  );
};

export default ContactForm;
