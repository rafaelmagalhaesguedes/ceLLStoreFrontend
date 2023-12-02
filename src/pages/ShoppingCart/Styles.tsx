import styled from 'styled-components';

export const CartContainer = styled.div`
  width: 100%;
  background-color: #eee;
  height: 100%;
`;

export const CartWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 2.5rem;
  justify-content: space-between;
  width: 100%;
  gap: 2rem;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

export const TitleCard = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: flex-start;
`;
