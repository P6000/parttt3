import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Category } from './Dish';

interface FilterMenuScreenProps {
  onFilterDishes: (category: string) => void;
  onBack: () => void;
  allDishes: any[];
}

const FilterMenuScreen: React.FC<FilterMenuScreenProps> = ({ onFilterDishes, onBack, allDishes }) => {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All' | null>(null);

  const handleApplyFilter = () => {
    if (!selectedCategory) {
      Alert.alert('No Selection', 'Please select a category or tap "Show All"');
      return;
    }
    
    onFilterDishes(selectedCategory);
    Alert.alert('Filter Applied', `Showing ${selectedCategory === 'All' ? 'all dishes' : selectedCategory + 's'}`);
  };

  const handleShowAll = () => {
    onFilterDishes('All');
    Alert.alert('Filter Reset', 'Showing all dishes');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🔍 Filter Menu</Text>

      <Text style={styles.label}>Select Category:</Text>
      <View style={styles.categoryButtons}>
        {(['All', 'Starter', 'Main', 'Dessert'] as const).map((cat) => (
          <TouchableOpacity
            key={cat}
            style={[styles.catBtn, selectedCategory === cat && styles.selectedBtn]}
            onPress={() => setSelectedCategory(cat)}
          >
            <Text style={styles.catText}>{cat}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity 
        style={[styles.actionButton, styles.applyButton]}
        onPress={handleApplyFilter}
      >
        <Text style={styles.actionButtonText}>✅ Apply Filter</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.actionButton, styles.showAllButton]}
        onPress={handleShowAll}
      >
        <Text style={styles.actionButtonText}>🔄 Show All</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.actionButton, styles.backButton]}
        onPress={onBack}
      >
        <Text style={styles.actionButtonText}>← Back to Menu</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#2e7d32',
  },
  label: {
    fontSize: 18,
    marginBottom: 15,
    textAlign: 'center',
  },
  categoryButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  catBtn: {
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  selectedBtn: {
    backgroundColor: '#4caf50',
    borderColor: '#4caf50',
  },
  catText: {
    color: '#000',
    fontWeight: '500',
  },
  actionButton: {
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 8,
  },
  applyButton: {
    backgroundColor: '#28a745',
  },
  showAllButton: {
    backgroundColor: '#17a2b8',
  },
  backButton: {
    backgroundColor: '#6c757d',
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FilterMenuScreen;