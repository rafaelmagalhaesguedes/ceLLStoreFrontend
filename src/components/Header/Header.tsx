import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
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
          <FontAwesomeIcon icon={ faCartShopping } size="3x" />
          <CartCount>{cart.length}</CartCount>
        </CartIconWrapper>
      </HeaderWrapper>
    </HeaderContainer>
  );
}

export default Header;
