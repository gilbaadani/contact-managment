import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;

  label {
    font-weight: bold;
    margin-bottom: 8px;
  }

  input,
  textarea {
    padding: 10px;
    margin-bottom: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
  }

  button {
    padding: 12px 20px;
    border: 1px solid wheat;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
  }
`;