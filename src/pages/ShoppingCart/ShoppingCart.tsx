/* eslint-disable no-alert */
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReply, faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../../hooks/useCart';
import ProductContext from '../../context/ProductContext';
import {
  ButtonFinish, Cart, CartCheckout, CartContainer, CartInfo, Subtotal } from './Styles';

function ShoppingCart() {
  const { cart } = useContext(ProductContext);
  const navigate = useNavigate();
  const {
    increaseQuantity, decreaseQuantity, deleteItem, cartTotalFormatted } = useCart();

  return (
    <CartContainer>
      <Cart>
        <button type="button" className="button" onClick={ () => navigate('/') }>
          <FontAwesomeIcon icon={ faReply } size="1x" />
          {' '}
          Continuar comprando
        </button>
        <CartInfo>
          <h1>Carrinho de compras</h1>
          <ul>
            {cart.map((item) => (
              <li key={ item.id }>
                <img src={ item.thumbnail } alt={ item.title } />
                <h3>{item.title}</h3>
                <div>
                  <FontAwesomeIcon
                    className="minus"
                    onClick={ () => decreaseQuantity(item.id) }
                    icon={ faMinusCircle }
                    size="lg"
                  />
                  <span>{item.quantity}</span>
                  <FontAwesomeIcon
                    className="plus"
                    onClick={ () => increaseQuantity(item.id) }
                    icon={ faPlusCircle }
                    size="lg"
                  />
                </div>
                <p>
                  R$
                  {' '}
                  {item.price}
                </p>
                <button onClick={ () => deleteItem(item.id) }>
                  X
                </button>
              </li>
            ))}
          </ul>
          {cart.length === 0 && <p>Não há produtos no carrinho</p>}
        </CartInfo>
      </Cart>
      <CartCheckout>
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
      </CartCheckout>
    </CartContainer>
  );
}

export default ShoppingCart;
