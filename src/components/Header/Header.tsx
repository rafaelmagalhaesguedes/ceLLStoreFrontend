import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import {
  CartCount,
  CartIconWrapper,
  HeaderContainer,
  HeaderWrapper, Logo } from './Styles';
import SearchBar from '../SearchBar/SearchBar';
import ProductContext from '../../context/ProductContext';
import Navbar from '../NavBar/NavBar';

function Header() {
  const { cart } = useContext(ProductContext);
  const carLength = cart && cart.length;

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <Logo>
          <Link to="/">
            <h1>Cell Store</h1>
          </Link>
        </Logo>
        <Navbar />
        <SearchBar />
        <CartIconWrapper>
          <Link data-testid="icon-cart" to="/shopping-cart">
            <FontAwesomeIcon icon={ faCartShopping } size="2x" />
            <CartCount>{carLength}</CartCount>
          </Link>
        </CartIconWrapper>
      </HeaderWrapper>
    </HeaderContainer>
  );
}

export default Header;
