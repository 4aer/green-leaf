import { Plant } from '@/contexts/CartContext';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Check } from 'lucide-react';

interface ProductCardProps {
  plant: Plant;
}

const ProductCard = ({ plant }: ProductCardProps) => {
  const { addToCart, isInCart } = useCart();
  const inCart = isInCart(plant.id);

  const handleAddToCart = () => {
    if (!inCart) {
      addToCart(plant);
    }
  };

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg border-border">
      <CardContent className="p-0">
        <div className="aspect-square overflow-hidden bg-muted">
          <img
            src={plant.image}
            alt={plant.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <div className="mb-1 text-xs uppercase tracking-wide text-muted-foreground">
            {plant.category}
          </div>
          <h3 className="mb-2 text-lg font-heading font-semibold text-foreground">
            {plant.name}
          </h3>
          <p className="text-2xl font-semibold text-primary">
            ${plant.price.toFixed(2)}
          </p>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button
          onClick={handleAddToCart}
          disabled={inCart}
          className="w-full transition-all duration-200"
          variant={inCart ? "secondary" : "default"}
        >
          {inCart ? (
            <>
              <Check className="mr-2 h-4 w-4" />
              Added to Cart
            </>
          ) : (
            'Add to Cart'
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
