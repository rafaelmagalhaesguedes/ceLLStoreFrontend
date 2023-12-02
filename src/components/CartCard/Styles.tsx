import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CartCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Cart = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 1.5rem;
  background-color: #fff;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ButtonBack = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 5px;
  color: #000;
  cursor: pointer;
  font-size: 1rem;
  margin-bottom: 20px;
  align-self: flex-start;
  margin-bottom: 1.5rem;

  &:hover {
    background-color: #bbb;
  }
`;

export const CartInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TitleCart = styled.h1`
  font-size: 2rem;
  margin-bottom: 16px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const CartBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  list-style: none;
  width: 100%;
`;

export const CartItem = styled.li`
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #ccc;
  display: flex;
  flex-direction: row;
  padding: 30px 0;
  gap: 2rem;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
    justify-content: center;
  }
`;

export const CartItemInfo = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const CartImage = styled.img`
  border-radius: 5px;
  width: 120px;
`;

export const CartSubTitle = styled.h3`
  width: 100%;
  font-size: 1rem;
  text-align: center;
  color: #444;
`;

export const CartQuantity = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
  padding: 0 20px;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  button {
    margin-top: 3px;
  }
`;

export const CartPrice = styled.p`
  width: 50%;
  font-size: 1rem;
  text-align: center;
  color: #f80;
  font-weight: bold;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 1.5rem;
  }
`;

export const ButtonDeleteMobile = styled.button`
  display: none;
  background-color: transparent;
  border: none;
  border-radius: 5px;
  color: #000;
  cursor: pointer;
  font-size: 1rem;
  align-self: flex-end;

  &:hover {
    background-color: #bbb;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

export const ButtonDelete = styled.button`
display: block;
  background-color: transparent;
  border: none;
  border-radius: 5px;
  color: #000;
  cursor: pointer;
  font-size: 1rem;
  margin-bottom: 20px;
  align-self: flex-start;
  margin-bottom: 1.5rem;
  width: 10%;

  &:hover {
    background-color: #bbb;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
