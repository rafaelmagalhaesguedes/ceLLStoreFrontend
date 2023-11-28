import { faCartShopping, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useState } from 'react';
import { HeaderContainer, HeaderWrapper, SearchBar } from './Styles';
import ProductContext from '../../context/ProductContext';

function Header() {
  const { filterByString } = useContext(ProductContext);
  const [search, setSearch] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleClick = () => {
    filterByString(search);
    setSearch('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      filterByString(search);
      setSearch('');
    }
  };

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <div>
          <h1>Cell Store</h1>
        </div>
        <SearchBar>
          <input
            type="text"
            placeholder="Buscar..."
            value={ search }
            onChange={ handleChange }
            onKeyDown={ handleKeyDown }
          />
          <FontAwesomeIcon
            onClick={ handleClick }
            icon={ faSearch }
          />
        </SearchBar>
        <FontAwesomeIcon icon={ faCartShopping } size="2x" />
      </HeaderWrapper>
    </HeaderContainer>
  );
}

export default Header;
