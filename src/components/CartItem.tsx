import { Plant } from '@/contexts/CartContext';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Plus, Minus, Trash2 } from 'lucide-react';

interface CartItemProps {
  item: Plant & { quantity: number };
}

const CartItem = ({ item }: CartItemProps) => {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  return (
    <Card className="overflow-hidden">
      <div className="flex gap-4 p-4">
        <div className="h-24 w-24 shrink-0 overflow-hidden rounded-md bg-muted">
          <img
            src={item.image}
            alt={item.name}
            className="h-full w-full object-cover"
          />
        </div>
        
        <div className="flex flex-1 flex-col justify-between">
          <div className="flex justify-between">
            <div>
              <h3 className="font-heading font-semibold text-foreground">{item.name}</h3>
              <p className="text-sm text-muted-foreground">{item.category}</p>
            </div>
            <p className="font-semibold text-primary">${item.price.toFixed(2)}</p>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={() => decreaseQuantity(item.id)}
              >
                <Minus className="h-3 w-3" />
              </Button>
              <span className="w-8 text-center font-medium">{item.quantity}</span>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={() => increaseQuantity(item.id)}
              >
                <Plus className="h-3 w-3" />
              </Button>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-destructive hover:text-destructive"
              onClick={() => removeFromCart(item.id)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CartItem;
