import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Plant {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
}

interface CartItem extends Plant {
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (plant: Plant) => void;
  removeFromCart: (plantId: string) => void;
  increaseQuantity: (plantId: string) => void;
  decreaseQuantity: (plantId: string) => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
  isInCart: (plantId: string) => boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (plant: Plant) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === plant.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === plant.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...plant, quantity: 1 }];
    });
  };

  const removeFromCart = (plantId: string) => {
    setCart(prevCart => prevCart.filter(item => item.id !== plantId));
  };

  const increaseQuantity = (plantId: string) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === plantId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (plantId: string) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === plantId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ).filter(item => item.quantity > 0)
    );
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const isInCart = (plantId: string) => {
    return cart.some(item => item.id === plantId);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        getTotalItems,
        getTotalPrice,
        isInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
