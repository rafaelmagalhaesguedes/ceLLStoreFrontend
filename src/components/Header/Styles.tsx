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
  h1 {
    font-size: 2rem;
    font-weight: bold;
  }
  
  a:visited {
    color: inherit;
  }
`;

export const CartIconWrapper = styled.div`
  position: relative;
  cursor: pointer;
  
  a:visited {
    color: inherit;
  }
`;

export const CartCount = styled.span`
  position: absolute;
  top: -15px;
  right: -10px;
  background: red;
  color: white;
  border-radius: 20px;
  padding: 3px 7px;
  font-size: 13px;
  font-weight: bold;
`;
