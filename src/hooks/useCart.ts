/* eslint-disable no-alert */
import { useContext } from 'react';
import ProductContext from '../context/ProductContext';

export function useCart() {
  const { cart, setCart } = useContext(ProductContext);

  const cartTotal = cart
    .reduce((acc: number, item: any) => acc + item.price * item.quantity, 0);

  const cartTotalFormatted = cartTotal
    .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

  const increaseQuantity = (itemId: string) => {
    const item = cart.find((cartItem) => cartItem.id === itemId);
    if (item) {
      if (item.quantity < item.available_quantity) {
        item.quantity += 1;
        localStorage.setItem('cart', JSON.stringify(cart));
        setCart([...cart]);
      } else {
        alert('You cannot add more of this item, as it exceeds the available quantity.');
      }
    }
  };

  const decreaseQuantity = (itemId: string) => {
    const item = cart.find((cartItem) => cartItem.id === itemId);
    if (item && item.quantity > 1) {
      item.quantity -= 1;
      localStorage.setItem('cart', JSON.stringify(cart));
      setCart([...cart]);
    }
  };

  const deleteItem = (itemId: string) => {
    const newCart = cart.filter((cartItem) => cartItem.id !== itemId);
    localStorage.setItem('cart', JSON.stringify(newCart));
    setCart(newCart);
  };

  return { increaseQuantity, decreaseQuantity, deleteItem, cartTotalFormatted };
}
