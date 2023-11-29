import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartCount,
  CartIconWrapper, HeaderContainer, HeaderWrapper, Logo } from './Styles';
import SearchBar from '../SearchBar/SearchBar';
import ProductContext from '../../context/ProductContext';

function Header() {
  const { cart } = useContext(ProductContext);
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <Logo><h1>Cell Store</h1></Logo>
        <SearchBar />
        <CartIconWrapper>
          <Link to="/shopping-cart">
            <FontAwesomeIcon icon={ faCartShopping } size="2x" />
            <CartCount>{cart.length}</CartCount>
          </Link>
        </CartIconWrapper>
      </HeaderWrapper>
    </HeaderContainer>
  );
}

export default Header;
