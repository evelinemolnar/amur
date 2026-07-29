import { useContext } from 'react';
import { CartContext, type CartValue } from './context';

export function useCart(): CartValue {
  const cart = useContext(CartContext);
  if (!cart) throw new Error('useCart must be used within a CartProvider');
  return cart;
}
