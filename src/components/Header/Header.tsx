import { faCartShopping, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HeaderContainer, HeaderWrapper, SearchBar } from './Styles';

function Header() {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <div>
          <h1>Cell Store</h1>
        </div>
        <SearchBar>
          <input type="text" placeholder="Buscar..." />
          <FontAwesomeIcon icon={ faSearch } />
        </SearchBar>
        <FontAwesomeIcon icon={ faCartShopping } size="2x" />
      </HeaderWrapper>
    </HeaderContainer>
  );
}

export default Header;
