import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import CartItem from '@/components/CartItem';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ShoppingBag, ArrowLeft } from 'lucide-react';
import { toast } from 'sonner';

const Cart = () => {
  const { cart, getTotalItems, getTotalPrice } = useCart();
  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice();

  const handleCheckout = () => {
    toast.info('Coming Soon', {
      description: 'Checkout functionality will be available soon!',
    });
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="container py-12">
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
            <ShoppingBag className="h-24 w-24 text-muted-foreground mb-6" />
            <h2 className="text-3xl font-heading font-bold mb-4 text-foreground">
              Your cart is empty
            </h2>
            <p className="text-muted-foreground mb-8">
              Start adding some beautiful plants to your collection!
            </p>
            <Link to="/products">
              <Button size="lg">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Continue Shopping
              </Button>
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container py-12">
        <h1 className="mb-2 text-4xl font-heading font-bold text-foreground">Shopping Cart</h1>
        <p className="mb-8 text-muted-foreground">
          {totalItems} {totalItems === 1 ? 'item' : 'items'} in your cart
        </p>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-24">
              <h2 className="text-xl font-heading font-semibold mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal ({totalItems} items)</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Shipping</span>
                  <span>Calculated at checkout</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span className="text-primary">${totalPrice.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Button onClick={handleCheckout} className="w-full" size="lg">
                  Checkout
                </Button>
                <Link to="/products" className="block">
                  <Button variant="outline" className="w-full">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Continue Shopping
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
