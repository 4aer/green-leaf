import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Leaf } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';

const Header = () => {
  const { getTotalItems } = useCart();
  const location = useLocation();
  const totalItems = getTotalItems();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <Leaf className="h-6 w-6 text-primary" />
          <span className="text-xl font-heading font-semibold text-primary">GreenLeaf Nursery</span>
        </Link>

        <nav className="flex items-center gap-6">
          <Link 
            to="/" 
            className={`text-sm font-medium transition-colors hover:text-primary ${
              location.pathname === '/' ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/products" 
            className={`text-sm font-medium transition-colors hover:text-primary ${
              location.pathname === '/products' ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            Shop
          </Link>
          <Link to="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-medium">
                  {totalItems}
                </span>
              )}
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
