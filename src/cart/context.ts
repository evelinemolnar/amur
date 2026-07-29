import { createContext } from 'react';
import type { ProductId } from '../data/catalog';

export type PurchaseMode = 'once' | 'sub';

export type CartLine = {
  id: ProductId;
  mode: PurchaseMode;
  qty: number;
};

export type CartValue = {
  lines: CartLine[];
  count: number;
  subtotal: number;
  isOpen: boolean;
  /** Amount still needed to unlock complimentary delivery. */
  remainingForFreeShipping: number;
  freeShippingUnlocked: boolean;
  shippingProgress: number;
  shippingLabel: string;
  shippingMessage: string;
  add: (id: ProductId, mode: PurchaseMode, qty?: number) => void;
  setQty: (index: number, delta: number) => void;
  remove: (index: number) => void;
  clear: () => void;
  open: () => void;
  close: () => void;
};

export const CartContext = createContext<CartValue | null>(null);

export const lineLabel = (mode: PurchaseMode) =>
  mode === 'sub' ? 'Subscription · every 30 days' : 'One-time';
