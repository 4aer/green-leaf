import { useState } from 'react';
import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';
import { plants } from '@/data/plants';
import { Button } from '@/components/ui/button';

const Products = () => {
  const categories = ['All', 'Indoor Plants', 'Succulents', 'Tropical Plants'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPlants = selectedCategory === 'All' 
    ? plants 
    : plants.filter(plant => plant.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container py-12">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl md:text-5xl font-heading font-bold text-foreground">
            Our Collection
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of premium houseplants, 
            each chosen for its beauty and ease of care.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="transition-all duration-200"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPlants.map((plant) => (
            <ProductCard key={plant.id} plant={plant} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Products;
