import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faMinusCircle, faReply } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ProductType } from '../../types/types';
import ProductContext from '../../context/ProductContext';
import {
  ButtonBack,
  ButtonDelete,
  ButtonDeleteMobile,
  Cart,
  CartBody,
  CartImage,
  CartInfo,
  CartItem,
  CartItemInfo, CartPrice, CartQuantity, CartSubTitle, TitleCart } from './Styles';

function CartCard() {
  const navigate = useNavigate();
  const {
    cart, increaseQuantity, decreaseQuantity, deleteItem } = useContext(ProductContext);

  return (
    <Cart>
      <CartInfo>
        <ButtonBack type="button" onClick={ () => navigate('/') }>
          <FontAwesomeIcon icon={ faReply } size="1x" />
          {' '}
          Continuar comprando
        </ButtonBack>
        <TitleCart>Carrinho de compras</TitleCart>
        <CartBody>
          {cart.map((item: ProductType) => (
            <CartItem key={ item.id }>
              <ButtonDeleteMobile onClick={ () => deleteItem(item.id) }>
                X
              </ButtonDeleteMobile>
              <CartItemInfo to={ `/product-details/${item.id}` }>
                <CartImage src={ item.thumbnail } alt={ item.title } />
                <CartSubTitle>{item.title}</CartSubTitle>
              </CartItemInfo>
              <CartQuantity>
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
              </CartQuantity>
              <CartPrice>
                R$
                {' '}
                {item.price}
              </CartPrice>
              <ButtonDelete onClick={ () => deleteItem(item.id) }>
                X
              </ButtonDelete>
            </CartItem>
          ))}
        </CartBody>
        {cart.length === 0 && <p>Não há produtos no carrinho</p>}
      </CartInfo>
    </Cart>
  );
}

export default CartCard;
