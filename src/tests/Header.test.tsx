import { screen } from '@testing-library/react';
import renderWithRouter from '../helpers/renderWithRouter';
import Header from '../components/Header/Header';
import { mockContext } from './mocks/mockContext';
import ProductContext from '../context/ProductContext';
import { mockCart } from './mocks/mockCart';

describe('Testing the Header.tsx file', () => {
  it('should render the logo', () => {
    renderWithRouter(<Header />);
    const logo = screen.getByRole('link', { name: /cell store/i });
    expect(logo).toBeInTheDocument();
  });

  it('should render the search bar', () => {
    renderWithRouter(<Header />);
    const search = screen.getByPlaceholderText(/buscar.../i);
    expect(search).toBeInTheDocument();
  });

  it('should render the cart icon', () => {
    renderWithRouter(<Header />);
    const cart = screen.getByTestId('icon-cart');
    expect(cart).toBeInTheDocument();
  });

  it('should render correct cart count', () => {
    mockContext.cart = mockCart as never[];

    renderWithRouter(
      <ProductContext.Provider value={ mockContext }>
        <Header />
      </ProductContext.Provider>,
    );

    const cartCount = screen.getByTestId('cart-count');
    expect(cartCount.textContent).toBe('2');
  });
});
