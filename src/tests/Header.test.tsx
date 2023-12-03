import { screen } from '@testing-library/react';
import renderWithRouter from '../helpers/renderWithRouter';
import Header from '../components/Header/Header';
import { mockContext } from './mocks/mockContext';
import ProductContext from '../context/ProductContext';
import { mockCart } from './mocks/mockCart';

describe('Testing the Header.tsx file', () => {
  beforeEach(() => {
    mockContext.cart = mockCart as never[];
    renderWithRouter(
      <ProductContext.Provider value={ mockContext }>
        <Header />
      </ProductContext.Provider>,
    );
  });

  it('should render the logo', () => {
    const logo = screen.getByRole('link', { name: /cell store/i });
    expect(logo).toBeInTheDocument();
  });

  it('should render the search bar', () => {
    const search = screen.getByPlaceholderText(/buscar.../i);
    expect(search).toBeInTheDocument();
  });

  it('should render the cart icon', () => {
    const cart = screen.getByTestId('icon-cart');
    expect(cart).toBeInTheDocument();
  });

  it('should render correct cart count', () => {
    const cartCount = screen.getByTestId('cart-count');
    expect(cartCount.textContent).toBe('2');
  });
});
