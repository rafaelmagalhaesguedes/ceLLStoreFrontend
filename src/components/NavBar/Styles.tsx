import styled from 'styled-components';

export const NavContainer = styled.div`
  display: flex;
  background-color: #4A3F35;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Nav = styled.nav`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1.5rem;
  color: #fff;

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
  }

  li {
    gap: 2rem;
    display: flex;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: #fff;
    text-decoration: none;
    font-size: 0.8rem;
    font-weight: 600;
    margin: 0 0.5rem;
    letter-spacing: 0.5px;

    &:hover {
      color: #f80;
    }
  }
`;

export const Submenu = styled.ul`
  display: none;
  position: absolute;
  width: 150px;
  height: auto;
  margin-left: -5rem;
  background-color: #4A3F35;
  list-style: none;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.9);

  button {
    margin: 0.5rem 0;
    color: #fff;
    font-size: 0.8rem;
    font-weight: 600;
    cursor: pointer;
  }
`;

export const MenuItem = styled.div`
  span {
    cursor: pointer;
  }
`;
