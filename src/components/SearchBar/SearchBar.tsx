import { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { SearchBarContainer } from './Styles';
import ProductContext from '../../context/ProductContext';

function SearchBar() {
  const [search, setSearch] = useState('');
  const { filterByString } = useContext(ProductContext);

  const handleSearch = () => {
    if (search === '') return;
    filterByString(search);
    clearSearch();
  };

  const handleEnter = (e: any) => {
    if (e.key === 'Enter') {
      handleSearch();
      clearSearch();
    }
  };

  const clearSearch = () => {
    setSearch('');
  };

  return (
    <SearchBarContainer>
      <input
        type="text"
        placeholder="Buscar..."
        value={ search }
        onChange={ (e) => setSearch(e.target.value) }
        onKeyDown={ handleEnter }
      />
      <FontAwesomeIcon
        onClick={ handleSearch }
        icon={ faSearch }
      />
    </SearchBarContainer>
  );
}

export default SearchBar;
