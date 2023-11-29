// CartCheckoutComponent.tsx
import { useCart } from '../../hooks/useCart';
import { ProductType } from '../../types/types';
import { CartCheckoutContainer, Subtotal, ButtonFinish } from './Styles';

type CartCheckoutProps = {
  cart: ProductType[];
};

function CartCheckout({ cart }: CartCheckoutProps) {
  const { cartTotalFormatted } = useCart();

  return (
    <CartCheckoutContainer>
      <h2>Resumo do pedido</h2>
      {cart.map((item) => (
        <div key={ item.id }>
          <h3>
            {item.title}
            {' '}
          </h3>
          <p>
            {item.shipping.free_shipping ? '(Frete grátis)' : ''}
          </p>
          <p>
            Quantidade:
            {' '}
            {item.quantity}
            {' '}
          </p>
          <p>
            Total:
            {' '}
            {(item.price * item.quantity)
              .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}

          </p>
        </div>
      ))}
      <Subtotal>
        <p>Subtotal</p>
        <p>{cartTotalFormatted}</p>
      </Subtotal>
      <ButtonFinish type="button">
        Finalizar compra
      </ButtonFinish>
    </CartCheckoutContainer>
  );
}

export default CartCheckout;
