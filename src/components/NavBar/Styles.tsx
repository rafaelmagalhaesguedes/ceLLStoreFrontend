/** *****************************************
*
*    CSS Styles Component Navbar Responsive
*
********************************************* */
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarResponsive = styled.nav`
  color: white;
  display: none;
  
  @media only screen and ( max-width : 768px ) {
    color: white;
    display: block;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;
`;

export const Bar = styled.div`
  background-color: white;
  height: 4px;
  margin: 3px 0;
  transition: 0.4s;
  width: 25px;
`;

export const MenuToggleButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  padding: 30px;
  z-index: 1000;

  @media only screen and ( max-width : 768px ) {
    padding: 0;
  }

  @media only screen and ( min-width : 769px ) and ( max - width : 1366px ) {
    padding: 0;
  }

  &.active ${Bar}:nth-child(1) {
    transform: rotate(-45deg) translate(-5px, 6px);
  }

  &.active ${Bar}:nth-child(2) {
    opacity: 0;
  }

  &.active ${Bar}:nth-child(3) {
    transform: rotate(45deg) translate(-5px, -6px);
  }

  &.active {
    ${Bar}:nth-child(1) {
      transform: rotate(-45deg) translate(-5px, 6px);
    }

    ${Bar}:nth-child(2) {
      opacity: 0;
    }

    ${Bar}:nth-child(3) {
      transform: rotate(45deg) translate(-5px, -6px);
    }
  }
`;

export const NavbarLinks = styled.div`
  display: none;
  background-color: #3f3533;
  color: white;
  flex-direction: column;
  width: 70%;
  height: 100vh;
  justify-content: center;
  gap: 3rem;
  padding: 0 1rem;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 999;

  &.active {
    display: flex;
  }

  button {
    padding: 0.5rem 1rem;
    background-color: #f80;
    color: #000;
    font-size: 1rem;
    border: none;
    font-weight: 700;
  }
`;

export const NavLinked = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: white;
  font-size: 1.3rem;
  text-decoration: none;
  cursor: pointer;
  padding: 0 10px;
  font-weight: 300;
  letter-spacing: 1px;

  @media only screen and ( max-width : 768px ) {
    font-size: 1rem;
  }
`;
