import { useState } from 'react';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MenuItem, Nav, NavContainer, Submenu } from './Styles';

function NavBar() {
  const [isSubmenuOpen, setSubmenuOpen] = useState(false);

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
            <a href="/">Celulares e Telefones</a>
            <a href="/">Câmeras e Acessórios</a>
            <a href="/">Eletrônicos, Áudio e Vídeo</a>
            <a href="/">Informática</a>
            <a href="/">Games</a>
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
