import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView
} from 'react-native';
import { Dish, Category, COURSES } from './Dish';
import { 
  calculateTotalDishes, 
  calculateAveragePricesByCourse, 
  calculateOverallAverage
} from './Calculation';

interface HomeScreenProps {
  dishes: Dish[];
  filteredDishes: Dish[];
  onAddDish: () => void;
  onFilter: () => void;
  onRemoveDish: (id: string) => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ 
  dishes, 
  filteredDishes, 
  onAddDish, 
  onFilter, 
  onRemoveDish 
}) => {
  // Calculate statistics using our functions
  const totalDishes = calculateTotalDishes(filteredDishes);
  const overallAverage = calculateOverallAverage(dishes);
  const averagePrices = calculateAveragePricesByCourse(dishes);

  const handleRemoveDish = (id: string) => {
    const dishToRemove = dishes.find(dish => dish.id === id);
    onRemoveDish(id);
    Alert.alert('Removed', `${dishToRemove?.name} has been removed from the menu.`);
  };

  return (
    <View style={styles.container}>
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={true}
      >
        <Text style={styles.title}>🍽 Chef Christoffel's Menu</Text>
        
        {/* Statistics Section */}
        <View style={styles.statsContainer}>
          <Text style={styles.statText}>Total Dishes: <Text style={styles.statHighlight}>{totalDishes}</Text></Text>
          <Text style={styles.statText}>Overall Average: <Text style={styles.statHighlight}>${overallAverage}</Text></Text>
          
          <Text style={styles.sectionTitle}>Average Prices by Category:</Text>
          <View style={styles.averageContainer}>
            {COURSES.map((course) => (
              <Text key={course} style={styles.averageText}>
                {course}s: ${averagePrices[course]}
              </Text>
            ))}
          </View>
        </View>

        {/* Dishes List */}
        <Text style={styles.listTitle}>Menu Items ({filteredDishes.length})</Text>
        {filteredDishes.length > 0 ? (
          <View style={styles.dishesContainer}>
            {filteredDishes.map((item) => (
              <View key={item.id} style={styles.dishCard}>
                <View style={styles.dishInfo}>
                  <Text style={styles.dishName}>{item.name}</Text>
                  <Text style={styles.dishDescription}>{item.description}</Text>
                  <Text style={styles.dishDetails}>${item.price.toFixed(2)} • {item.category}</Text>
                </View>
                <TouchableOpacity 
                  style={styles.removeBtn}
                  onPress={() => handleRemoveDish(item.id)}
                >
                  <Text style={styles.removeText}>✕</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        ) : (
          <Text style={styles.emptyText}>No dishes available. Add some dishes to get started!</Text>
        )}
      </ScrollView>

      {/* Fixed Action Buttons at Bottom */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={[styles.actionButton, styles.addButton]}
          onPress={onAddDish}
        >
          <Text style={styles.actionButtonText}>➕ Add New Dish</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.actionButton, styles.filterButton]}
          onPress={onFilter}
        >
          <Text style={styles.actionButtonText}>🔍 Filter Menu</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// ... (keep the same styles from previous HomeScreen)
const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#f8f9fa',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 100,
  },
  title: { 
    fontSize: 28, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    marginBottom: 20,
    color: '#2e7d32',
  },
  statsContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statText: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
  statHighlight: {
    fontWeight: 'bold',
    color: '#2e7d32',
  },
  sectionTitle: {
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 10,
    color: '#555',
    fontSize: 16,
  },
  averageContainer: {
    marginLeft: 10,
  },
  averageText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  listTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  dishesContainer: {
    marginBottom: 20,
  },
  dishCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 5,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  dishInfo: {
    flex: 1,
  },
  dishName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#333',
  },
  dishDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  dishDetails: {
    fontSize: 14,
    color: '#2e7d32',
    fontWeight: '500',
  },
  removeBtn: {
    backgroundColor: '#ff6b6b',
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  removeText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  emptyText: {
    textAlign: 'center',
    color: '#666',
    fontSize: 16,
    marginTop: 50,
    marginBottom: 30,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#f8f9fa',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#dee2e6',
    gap: 10,
  },
  actionButton: {
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  addButton: {
    backgroundColor: '#28a745',
  },
  filterButton: {
    backgroundColor: '#17a2b8',
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;