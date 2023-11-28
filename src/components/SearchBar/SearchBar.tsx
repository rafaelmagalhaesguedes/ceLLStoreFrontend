import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { SearchBarContainer } from './Styles';

function SearchBar() {
  return (
    <SearchBarContainer>
      <input
        type="text"
        placeholder="Buscar..."
      />
      <FontAwesomeIcon
        icon={ faSearch }
      />
    </SearchBarContainer>
  );
}

export default SearchBar;
