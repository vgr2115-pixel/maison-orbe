import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const STORAGE_KEY = 'maison-orbe-panier';
const CartContext = createContext(null);

const readStoredCart = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const keyOf = (slug, colour) => `${slug}__${colour}`;

export function CartProvider({ children }) {
  const [items, setItems] = useState(readStoredCart);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const value = useMemo(() => {
    const count = items.reduce((total, item) => total + item.quantity, 0);
    const subtotal = items.reduce((total, item) => total + item.quantity * item.price, 0);

    const addItem = (item) => {
      const key = keyOf(item.slug, item.colour);
      setItems((current) => {
        const exists = current.some((entry) => keyOf(entry.slug, entry.colour) === key);
        if (exists) {
          return current.map((entry) =>
            keyOf(entry.slug, entry.colour) === key
              ? { ...entry, quantity: Math.min(entry.quantity + item.quantity, 9) }
              : entry
          );
        }
        return [...current, { ...item, quantity: Math.min(item.quantity, 9) }];
      });
      setIsOpen(true);
    };

    const updateQuantity = (slug, colour, quantity) => {
      const next = Math.max(1, Math.min(quantity, 9));
      setItems((current) =>
        current.map((entry) =>
          keyOf(entry.slug, entry.colour) === keyOf(slug, colour) ? { ...entry, quantity: next } : entry
        )
      );
    };

    const removeItem = (slug, colour) =>
      setItems((current) =>
        current.filter((entry) => keyOf(entry.slug, entry.colour) !== keyOf(slug, colour))
      );

    return {
      items,
      count,
      subtotal,
      addItem,
      updateQuantity,
      removeItem,
      clear: () => setItems([]),
      isOpen,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
    };
  }, [items, isOpen]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart doit être utilisé dans un CartProvider');
  return context;
};