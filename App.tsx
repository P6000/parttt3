import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import HomeScreen from './HomeScreen';
import AddDishScreen from './AddMenuItem';
import FilterMenuScreen from './FilterScreen';

// Simple navigation without React Navigation
export default function App() {
  const [currentScreen, setCurrentScreen] = useState<'home' | 'add' | 'filter'>('home');
  const [dishes, setDishes] = useState<any[]>([
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
    }
  ]);
  const [filteredDishes, setFilteredDishes] = useState<any[]>([]);

  // Initialize filtered dishes
  React.useEffect(() => {
    setFilteredDishes(dishes);
  }, [dishes]);

  const handleAddDish = (newDish: any) => {
    const updatedDishes = [...dishes, newDish];
    setDishes(updatedDishes);
    setFilteredDishes(updatedDishes);
    setCurrentScreen('home');
  };

  const handleFilterDishes = (category: string) => {
    if (category === 'All') {
      setFilteredDishes(dishes);
    } else {
      setFilteredDishes(dishes.filter(dish => dish.category === category));
    }
    setCurrentScreen('home');
  };

  const handleRemoveDish = (id: string) => {
    const updatedDishes = dishes.filter(dish => dish.id !== id);
    setDishes(updatedDishes);
    setFilteredDishes(updatedDishes);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'add':
        return (
          <AddDishScreen 
            onAddDish={handleAddDish}
            onBack={() => setCurrentScreen('home')}
          />
        );
      case 'filter':
        return (
          <FilterMenuScreen 
            onFilterDishes={handleFilterDishes}
            onBack={() => setCurrentScreen('home')}
            allDishes={dishes}
          />
        );
      default:
        return (
          <HomeScreen 
            dishes={dishes}
            filteredDishes={filteredDishes}
            onAddDish={() => setCurrentScreen('add')}
            onFilter={() => setCurrentScreen('filter')}
            onRemoveDish={handleRemoveDish}
          />
        );
    }
  };

  return (
    <View style={styles.container}>
      {renderScreen()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
});