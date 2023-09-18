import styled from 'styled-components';

export const ListContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    padding: 10px;
    margin-bottom: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
  }

  table {
    width: 100%;
    border-collapse: collapse;

    th {
      cursor: pointer;
      padding: 12px;
      text-align: left;
    }

    th,
    td {
      border: 1px solid #ccc;
      padding: 12px;
    }
  }

  .contact-card {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 12px;
    background-color: #f9f9f9;

    div {
      margin-bottom: 8px;
    }
  }
`;