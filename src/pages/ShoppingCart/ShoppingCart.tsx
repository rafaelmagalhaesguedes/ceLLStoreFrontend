/* eslint-disable no-alert */
import { useContext } from 'react';
import ProductContext from '../../context/ProductContext';
import { CartContainer } from './Styles';
import CartCard from '../../components/CartCard/CartCard';
import CartCheckout from '../../components/CartCheckout/CartCheckout';

function ShoppingCart() {
  const { cart } = useContext(ProductContext);

  return (
    <CartContainer>
      <CartCard cart={ cart } />
      <CartCheckout cart={ cart } />
    </CartContainer>
  );
}

export default ShoppingCart;
