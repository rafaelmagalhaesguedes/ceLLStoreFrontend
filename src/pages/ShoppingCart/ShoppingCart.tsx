import { CartContainer } from './Styles';
import CartCard from '../../components/CartCard/CartCard';
import CartCheckout from '../../components/CartCheckout/CartCheckout';

function ShoppingCart() {
  return (
    <CartContainer>
      <CartCard />
      <CartCheckout />
    </CartContainer>
  );
}

export default ShoppingCart;
