import styled from 'styled-components';

export const NavContainer = styled.div`
  display: flex;
  background-color: #4A3F35;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  color: #fff;

  ul {
    display: flex;
    list-style: none;
  }

  li {
    gap: 3rem;
    display: flex;
  }

  a {
    color: #fff;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 600;
    margin: 0 0.5rem;
  }
`;
