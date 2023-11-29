import Swal from 'sweetalert2';
import { ProductType } from '../types/types';

export function useCart(cart: ProductType[], setCart: any) {
  const cartTotal = cart
    .reduce((acc: number, item: any) => acc + item.price * item.quantity, 0);

  const cartTotalFormatted = cartTotal
    .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

  const addToCart = (item: ProductType) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      item.quantity = 1;
      cart.push(item);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    setCart([...cart]);
  };

  const deleteItem = (itemId: string) => {
    const newCart = cart.filter((cartItem) => cartItem.id !== itemId);
    localStorage.setItem('cart', JSON.stringify(newCart));
    setCart(newCart);
  };

  const increaseQuantity = (itemId: string) => {
    const item = cart.find((cartItem) => cartItem.id === itemId);
    if (item) {
      if (item.quantity < item.available_quantity) {
        item.quantity += 1;
        localStorage.setItem('cart', JSON.stringify(cart));
        setCart([...cart]);
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'You cannot add more of this item, as it exceeds the available quantity.',
          timer: 3000,
        });
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

  return {
    addToCart, increaseQuantity, decreaseQuantity, deleteItem, cartTotalFormatted };
}
