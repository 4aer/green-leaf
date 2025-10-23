import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Leaf, ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-nursery.jpg';

const Landing = () => {
  return (
    <div className="min-h-screen">
      <div className="relative h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
        </div>
        
        <div className="relative flex h-full items-center">
          <div className="container">
            <div className="max-w-2xl space-y-6 text-white">
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="h-12 w-12" />
                <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight">
                  GreenLeaf Nursery
                </h1>
              </div>
              
              <p className="text-lg md:text-xl leading-relaxed text-white/90 max-w-xl">
                We cultivate connections between people and plants. Our carefully curated collection brings 
                nature's serenity into your home, one leaf at a time. Each plant is nurtured with care, 
                ready to thrive in your space.
              </p>
              
              <Link to="/products">
                <Button size="lg" className="group text-lg px-8 py-6 mt-4">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
