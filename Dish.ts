export type Category = 'Starter' | 'Main' | 'Dessert';

export interface Dish {
  id: string;
  name: string;
  description: string;
  category: Category;
  price: number;
}

// Global variable for courses
export const COURSES: Category[] = ['Starter', 'Main', 'Dessert'];