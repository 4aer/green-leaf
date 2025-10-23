import { Plant } from '@/contexts/CartContext';
import monsteraImg from '@/assets/plant-monstera.jpg';
import snakeImg from '@/assets/plant-snake.jpg';
import pothosImg from '@/assets/plant-pothos.jpg';
import succulentImg from '@/assets/plant-succulent-mix.jpg';
import aloeImg from '@/assets/plant-aloe.jpg';
import birdImg from '@/assets/plant-bird-of-paradise.jpg';

export const plants: Plant[] = [
  {
    id: '1',
    name: 'Monstera Deliciosa',
    category: 'Indoor Plants',
    price: 45.99,
    image: monsteraImg,
    description: 'A stunning tropical plant with iconic split leaves.',
  },
  {
    id: '2',
    name: 'Snake Plant',
    category: 'Indoor Plants',
    price: 29.99,
    image: snakeImg,
    description: 'Low-maintenance plant perfect for beginners.',
  },
  {
    id: '3',
    name: 'Pothos',
    category: 'Indoor Plants',
    price: 24.99,
    image: pothosImg,
    description: 'Trailing vine plant that purifies air beautifully.',
  },
  {
    id: '4',
    name: 'Succulent Mix',
    category: 'Succulents',
    price: 19.99,
    image: succulentImg,
    description: 'Colorful arrangement of various succulents.',
  },
  {
    id: '5',
    name: 'Aloe Vera',
    category: 'Succulents',
    price: 22.99,
    image: aloeImg,
    description: 'Medicinal succulent with healing properties.',
  },
  {
    id: '6',
    name: 'Bird of Paradise',
    category: 'Tropical Plants',
    price: 79.99,
    image: birdImg,
    description: 'Exotic tropical plant with stunning foliage.',
  },
];
