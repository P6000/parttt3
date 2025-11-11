import { Dish, Category } from './Dish';

// Function using FOR loop to calculate total dishes
export const calculateTotalDishes = (dishes: Dish[]): number => {
  return dishes.length;
};

// Function using WHILE loop to find dish by ID
export const findDishById = (dishes: Dish[], id: string): Dish | undefined => {
  let index = 0;
  while (index < dishes.length) {
    if (dishes[index].id === id) {
      return dishes[index];
    }
    index++;
  }
  return undefined;
};

// Function using FOR...IN loop to calculate average prices by category
export const calculateAveragePricesByCourse = (dishes: Dish[]): { [key in Category]: string } => {
  // Initialize category totals properly
  const categoryTotals: { [key in Category]: { sum: number; count: number } } = {
    Starter: { sum: 0, count: 0 },
    Main: { sum: 0, count: 0 },
    Dessert: { sum: 0, count: 0 }
  };

  // Using for loop to iterate through dishes
  for (let i = 0; i < dishes.length; i++) {
    const dish = dishes[i];
    const category = dish.category;
    
    if (categoryTotals[category]) {
      categoryTotals[category].sum += dish.price;
      categoryTotals[category].count += 1;
    }
  }

  const averages: { [key in Category]: string } = {
    Starter: '0.00',
    Main: '0.00', 
    Dessert: '0.00'
  };

  // Using for...in loop to calculate averages
  for (const category in categoryTotals) {
    const cat = category as Category;
    const total = categoryTotals[cat];
    if (total.count > 0) {
      averages[cat] = (total.sum / total.count).toFixed(2);
    }
  }

  return averages;
};

// Function using FOR loop to calculate overall average
export const calculateOverallAverage = (dishes: Dish[]): string => {
  if (dishes.length === 0) return '0.00';
  
  let total = 0;
  for (let i = 0; i < dishes.length; i++) {
    total += dishes[i].price;
  }
  return (total / dishes.length).toFixed(2);
};

// NEW: Function to get dish counts by category using while loop
export const getDishCountsByCategory = (dishes: Dish[]): { [key in Category]: number } => {
  const counts = {
    Starter: 0,
    Main: 0,
    Dessert: 0
  };

  let i = 0;
  while (i < dishes.length) {
    const dish = dishes[i];
    counts[dish.category] += 1;
    i++;
  }

  return counts;
};