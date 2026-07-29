import { useCallback, useMemo, useState, type ReactNode } from 'react';
import { FLAT_SHIPPING, FREE_SHIPPING_THRESHOLD, eur, priceOf, type ProductId } from '../data/catalog';
import { CartContext, type CartLine, type CartValue, type PurchaseMode } from './context';

export default function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const add = useCallback((id: ProductId, mode: PurchaseMode, qty = 1) => {
    setLines((current) => {
      const next = current.map((line) => ({ ...line }));
      const existing = next.findIndex((line) => line.id === id && line.mode === mode);
      if (existing >= 0) next[existing].qty += qty;
      else next.push({ id, mode, qty });
      return next;
    });
    setIsOpen(true);
  }, []);

  const setQty = useCallback((index: number, delta: number) => {
    setLines((current) =>
      current.map((line, i) => (i === index ? { ...line, qty: Math.max(1, line.qty + delta) } : line)),
    );
  }, []);

  const remove = useCallback((index: number) => {
    setLines((current) => current.filter((_, i) => i !== index));
  }, []);

  const clear = useCallback(() => setLines([]), []);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  const value = useMemo<CartValue>(() => {
    const subtotal = lines.reduce((total, line) => total + priceOf(line.id, line.mode) * line.qty, 0);
    const count = lines.reduce((total, line) => total + line.qty, 0);
    const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
    const unlocked = subtotal >= FREE_SHIPPING_THRESHOLD && subtotal > 0;

    return {
      lines,
      count,
      subtotal,
      isOpen,
      remainingForFreeShipping: remaining,
      freeShippingUnlocked: unlocked,
      shippingProgress: Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100),
      shippingLabel: unlocked ? 'Free' : subtotal > 0 ? eur(FLAT_SHIPPING) : '—',
      shippingMessage: unlocked
        ? 'You’ve unlocked complimentary delivery'
        : `Add ${eur(remaining)} for complimentary delivery`,
      add,
      setQty,
      remove,
      clear,
      open,
      close,
    };
  }, [lines, isOpen, add, setQty, remove, clear, open, close]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
