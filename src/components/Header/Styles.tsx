import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #222;
  padding: 1rem;
  color: #fff;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  padding: 0 1rem;
  align-items: center;
`;

export const Logo = styled.div`
`;

export const CartIconWrapper = styled.div`
  position: relative;
`;

export const CartCount = styled.span`
  position: absolute;
  top: -10px;
  right: -10px;
  background: red;
  color: white;
  border-radius: 50%;
  padding: 5px 10px;
  font-size: 14px;
`;
