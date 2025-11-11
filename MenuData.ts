import { Dish } from './Dish';

// Global variable for initial dishes - FIXED PRICES
export let menuDishes: Dish[] = [
  { 
    id: '1', 
    name: 'Caesar Salad', 
    description: 'Fresh romaine lettuce with Caesar dressing', 
    category: 'Starter', 
    price: 5.99 
  },
  { 
    id: '2', 
    name: 'Grilled Chicken', 
    description: 'Juicy grilled chicken with herbs', 
    category: 'Main', 
    price: 14.99 
  },
  { 
    id: '3', 
    name: 'Chocolate Cake', 
    description: 'Rich chocolate cake with ganache', 
    category: 'Dessert', 
    price: 6.99 
  },
  { 
    id: '4', 
    name: 'Garlic Bread', 
    description: 'Warm bread with garlic butter', 
    category: 'Starter', 
    price: 4.99 
  },
  { 
    id: '5', 
    name: 'Beef Steak', 
    description: 'Premium beef steak with sauce', 
    category: 'Main', 
    price: 19.99 
  }
];

// Function to update global dishes array
export const updateMenuDishes = (newDishes: Dish[]) => {
  menuDishes = newDishes;
};

// Function to get all dishes
export const getAllDishes = (): Dish[] => {
  return menuDishes;
};