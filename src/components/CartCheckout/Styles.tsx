import styled from 'styled-components';

export const CartCheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  align-items: center;
  padding: 2.5rem;
  background-color: #fff;
  height: auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  div {
    border-top: 1px solid #ccc;
    padding: 10px 0;
  }

  h2 {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }

  h3 {
    font-size: 1rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 0.8rem;
    padding: 0.5rem 0;
    color: #444;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Subtotal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 10px 0;
  
    p {
        font-size: 1rem;
        font-weight: bold;
    }
`;

export const ButtonFinish = styled.button`
    background-color: #f80;
    border: none;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    font-size: 1rem;
    margin-bottom: 20px;
    align-self: flex-start;
    margin-bottom: 1.5rem;
    width: 100%;
    padding: 10px 0;
    font-weight: bold;
    
    &:hover {
        background-color: #e70;
    }
    `;
