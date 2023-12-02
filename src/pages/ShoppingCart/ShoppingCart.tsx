import { CartContainer, CartWrapper } from './Styles';
import CartCard from '../../components/CartCard/CartCard';
import CartCheckout from '../../components/CartCheckout/CartCheckout';

function ShoppingCart() {
  return (
    <CartContainer>
      <CartWrapper>
        <CartCard />
        <CartCheckout />
      </CartWrapper>
    </CartContainer>
  );
}

export default ShoppingCart;
