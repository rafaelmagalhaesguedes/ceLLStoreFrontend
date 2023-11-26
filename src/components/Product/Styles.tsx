import styled from 'styled-components';

export const ProductContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-content: center;
  width: 80%;
  heigth: auto;
`;

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  heigt: auto;
  margin: 1.5rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.5rem #ccc;
  justify-content: space-between;
`;
