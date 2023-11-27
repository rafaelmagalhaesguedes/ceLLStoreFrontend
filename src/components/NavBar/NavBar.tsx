import { useContext, useState } from 'react';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MenuItem, Nav, NavContainer, Submenu } from './Styles';
import ProductContext from '../../context/ProductContext';

function NavBar() {
  const [isSubmenuOpen, setSubmenuOpen] = useState(false);
  const { setUrl } = useContext(ProductContext);

  const handleMouseEnter = () => {
    setSubmenuOpen(true);
  };

  const handleMouseLeave = () => {
    setSubmenuOpen(false);
  };

  return (
    <NavContainer>
      <Nav>
        <ul>
          <li>
            <button onClick={ () => setUrl('MLB1051') }>
              Celulares e Telefones
            </button>
            <button onClick={ () => setUrl('MLB1039') }>
              Câmeras e Acessórios
            </button>
            <button onClick={ () => setUrl('MLB5726') }>
              Eletrônicos, Áudio e Vídeo
            </button>
            <button onClick={ () => setUrl('MLB1648') }>
              Informática
            </button>
            <button onClick={ () => setUrl('MLB1144') }>
              Games
            </button>
          </li>
        </ul>
        <MenuItem onMouseEnter={ handleMouseEnter } onMouseLeave={ handleMouseLeave }>
          <span>
            Filtrar
            {' '}
            <FontAwesomeIcon icon={ faChevronDown } />
          </span>
          {isSubmenuOpen && (
            <Submenu>
              <li>Menor Preço</li>
              <li>Maior Preço</li>
              <li>Frete Grátis</li>
            </Submenu>
          )}
        </MenuItem>
      </Nav>
    </NavContainer>
  );
}

export default NavBar;
