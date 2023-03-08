import styled from "styled-components";


export const PaymentFormContainer = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: cente;
`;

export const FormContainer = styled.form`
  height: 100px;
  min-width: 300px;
`;

export const PaymentsButton = styled.button`
  display: flex;
  padding: 1rem;
  border: none;
  margin-top: 2rem;
  cursor: pointer;
  background-color: #333;
  color: #fff;
  font: 1rem poppins ;
  transition: background-color 1s ease;

  &:hover {
    background-color: #f7941d;
  }

`;
