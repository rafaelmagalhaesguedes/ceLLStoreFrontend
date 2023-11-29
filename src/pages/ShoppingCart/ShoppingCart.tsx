/* eslint-disable no-alert */
import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReply, faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import ProductContext from '../../context/ProductContext';
import {
  ButtonFinish, Cart, CartCheckout, CartContainer, CartInfo, Subtotal } from './Styles';

function ShoppingCart() {
  const { cart, setCart } = useContext(ProductContext);
  const navigate = useNavigate();

  const cartTotal = cart
    .reduce((acc: number, item: any) => acc + item.price * item.quantity, 0);

  const cartTotalFormatted = cartTotal
    .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

  const increaseQuantity = (itemId: string) => {
    const item = cart.find((cartItem) => cartItem.id === itemId);
    if (item) {
      // Check if the quantity is less than the available quantity
      if (item.quantity < item.available_quantity) {
        item.quantity += 1;
        localStorage.setItem('cart', JSON.stringify(cart));
        setCart([...cart]); // Update cart in context
      } else {
        // Show an error message
        alert('You cannot add more of this item, as it exceeds the available quantity.');
      }
    }
  };

  const decreaseQuantity = (itemId: string) => {
    const item = cart.find((cartItem) => cartItem.id === itemId);
    if (item && item.quantity > 1) {
      item.quantity -= 1;
      localStorage.setItem('cart', JSON.stringify(cart));
      setCart([...cart]); // Update cart in context
    }
  };

  const deleteItem = (itemId: string) => {
    const newCart = cart.filter((cartItem) => cartItem.id !== itemId);
    localStorage.setItem('cart', JSON.stringify(newCart));
    setCart(newCart); // Update cart in context
  };

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
                    onClick={ () => decreaseQuantity(item.id) }
                    icon={ faMinusCircle }
                    size="lg"
                  />
                  <span>{item.quantity}</span>
                  <FontAwesomeIcon
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
