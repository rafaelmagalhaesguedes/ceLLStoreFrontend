import { useContext } from 'react';
import { CartCheckoutContainer, Subtotal, ButtonFinish } from './Styles';
import ProductContext from '../../context/ProductContext';

function CartCheckout() {
  const { cart, cartTotalFormatted } = useContext(ProductContext);

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
