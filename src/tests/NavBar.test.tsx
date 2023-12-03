import { fireEvent, screen } from '@testing-library/react';
import Navbar from '../components/NavBar/NavBar';
import ProductContext from '../context/ProductContext';
import { mockContext } from './mocks/mockContext';
import renderWithRouter from '../helpers/renderWithRouter';

const FAVORITES_BTN = 'favorites-button';
const MENU_BTN = 'menu-button';

describe('Testing the NavBar.tsx file', () => {
  //
  beforeEach(() => {
    renderWithRouter(
      <ProductContext.Provider
        value={ mockContext }
      >
        <Navbar />
      </ProductContext.Provider>,
    );
  });

  it('renders correctly', () => {
    expect(screen.getByTestId(FAVORITES_BTN)).toBeInTheDocument();
  });

  it('calls getFavorites and closes menu when the favorites button is clicked', () => {
    const favoritesButton = screen.getByTestId(FAVORITES_BTN);
    fireEvent.click(favoritesButton);
    expect(mockContext.getFavorites).toHaveBeenCalled();
    expect(screen.getByTestId('navigation')).not.toHaveClass('active');
  });

  it('calls setCategorie and closes menu when a category button is clicked', () => {
    const categoryButton = screen.getByText('Games');
    fireEvent.click(categoryButton);
    expect(mockContext.setCategorie).toHaveBeenCalledWith('MLB1144');
    expect(screen.getByTestId('navigation')).not.toHaveClass('active');
  });

  it('opens menu when menu button is clicked', () => {
    const menuButton = screen.getByTestId(MENU_BTN);
    fireEvent.click(menuButton);
    expect(screen.getByTestId('navigation')).toHaveClass('active');
  });

  it('closes menu when menu button is clicked again', () => {
    const menuButton = screen.getByTestId(MENU_BTN);
    fireEvent.click(menuButton);
    fireEvent.click(menuButton);
    expect(screen.getByTestId('navigation')).not.toHaveClass('active');
  });
});
