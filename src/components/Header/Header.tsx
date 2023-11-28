import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HeaderContainer, HeaderWrapper, Logo } from './Styles';
import SearchBar from '../SearchBar/SearchBar';

function Header() {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <Logo><h1>Cell Store</h1></Logo>
        <SearchBar />
        <FontAwesomeIcon icon={ faCartShopping } size="2x" />
      </HeaderWrapper>
    </HeaderContainer>
  );
}

export default Header;
