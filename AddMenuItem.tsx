import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { Category, COURSES } from './Dish';

interface AddDishScreenProps {
  onAddDish: (newDish: any) => void;
  onBack: () => void;
}

const AddDishScreen: React.FC<AddDishScreenProps> = ({ onAddDish, onBack }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState<Category | ''>('');
  const [price, setPrice] = useState('');

  const handleSaveDish = () => {
    if (!name.trim()) {
      Alert.alert('Error', 'Please enter a dish name');
      return;
    }
    
    if (!description.trim()) {
      Alert.alert('Error', 'Please enter a description');
      return;
    }
    
    if (!category) {
      Alert.alert('Error', 'Please select a category');
      return;
    }
    
    if (!price || isNaN(Number(price)) || Number(price) <= 0) {
      Alert.alert('Error', 'Please enter a valid price');
      return;
    }

    const newDish = {
      id: Math.random().toString(36).substr(2, 9),
      name: name.trim(),
      description: description.trim(),
      category: category,
      price: parseFloat(parseFloat(price).toFixed(2))
    };

    onAddDish(newDish);
    Alert.alert('Success', `${newDish.name} has been added to the menu!`);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>➕ Add New Dish</Text>

      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter dish name"
      />

      <TextInput
        style={[styles.input, styles.textArea]}
        value={description}
        onChangeText={setDescription}
        placeholder="Enter dish description"
        multiline
      />

      <Text style={styles.label}>Select Category</Text>
      <View style={styles.categoryButtons}>
        {COURSES.map((cat) => (
          <TouchableOpacity
            key={cat}
            style={[
              styles.categoryBtn, 
              category === cat && styles.selectedCategoryBtn
            ]}
            onPress={() => setCategory(cat)}
          >
            <Text style={[
              styles.categoryText,
              category === cat && styles.selectedCategoryText
            ]}>
              {cat}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <TextInput
        style={styles.input}
        value={price}
        onChangeText={setPrice}
        placeholder="Enter price"
        keyboardType="numeric"
      />

      <TouchableOpacity 
        style={[styles.actionButton, styles.saveButton]}
        onPress={handleSaveDish}
      >
        <Text style={styles.actionButtonText}>💾 Save Dish</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.actionButton, styles.backButton]}
        onPress={onBack}
      >
        <Text style={styles.actionButtonText}>← Back to Menu</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

// ... (keep the same styles)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#2e7d32',
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  textArea: {
    height: 80,
    textAlignVertical: 'top',
    paddingTop: 12,
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333',
  },
  categoryButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  categoryBtn: {
    flex: 1,
    paddingVertical: 12,
    marginHorizontal: 5,
    borderWidth: 2,
    borderColor: '#dee2e6',
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  selectedCategoryBtn: {
    backgroundColor: '#2e7d32',
    borderColor: '#2e7d32',
  },
  categoryText: {
    color: '#495057',
    fontWeight: '500',
  },
  selectedCategoryText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  actionButton: {
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 8,
  },
  saveButton: {
    backgroundColor: '#28a745',
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

export default AddDishScreen;