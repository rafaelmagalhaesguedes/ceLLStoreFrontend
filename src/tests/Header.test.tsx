import { screen } from '@testing-library/react';
import renderWithRouter from '../helpers/renderWithRouter';
import Header from '../components/Header/Header';

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
});
