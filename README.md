## ST10492650
## PHUMELELO TAU

# MAST5112 - Mobile App Scripting - Portfolio of Evidence (Part 3)

## Chef Christoffel's Menu Management App

A React Native mobile application developed for Chef Christoffel to manage his personalized culinary menu experiences. This cross-platform solution works on both Android and iOS devices.



##  Project Overview

This app serves as a digital menu management system that allows Chef Christoffel to:
- Add, view, and remove menu items
- Organize dishes by course categories (Starters, Mains, Desserts)
- Filter menu for guests by course type
- View pricing statistics and averages
- Manage menu items across separate screens


## Features Implemented

### Core Features
- Home Screen: Display complete menu with real-time statistics
- Add Dish Screen: Separate screen for adding new menu items with full validation
- Filter Screen: Separate screen for guests to filter dishes by course
- Remove Functionality: Delete dishes from the menu with confirmation
- Data Management: Menu items stored in global array with state management

### Statistics & Analytics
- Total dish count display
- Overall average price calculation
- Average prices broken down by course (Starters, Mains, Desserts)
- Real-time price calculations and updates

### User Experience
- Professional green-themed UI
- Smooth navigation between screens
- Form validation with error handling
- Success/error alerts for user feedback
- Responsive design for mobile devices



##  Technical Implementation

### TypeScript Features Demonstrated
- For Loops: Used in `calculateTotalDishes()` and `calculateOverallAverage()`
- While Loops: Implemented in `findDishById()` for dish searching
- For...in Loops: Utilized in `calculateAveragePricesByCourse()` for category iteration
- Functions: Modular functions for code organization and reusability
- Global Variables: Shared menu data across components using global array
- Interfaces: Strong typing for Dish objects and component props

### React Native Components Used
- State management with useState and useEffect hooks
- ScrollView for smooth scrolling experience
- TouchableOpacity for interactive buttons
- Alert for user feedback and confirmations
- TextInput for form data entry
- StyleSheet for professional styling

### Navigation
- Simple state-based navigation (no external dependencies)
- Prop drilling for data flow between components
- Screen management through conditional rendering


##  Change Log

##  NEW FEATURES ADDED IN PART 3

### 1. Average Price by Course Calculation 
Implementatio: Added comprehensive average calculation system
- Function: `calculateAveragePricesByCourse()` in `/calculations.ts`
- Technology: Uses for...in loops for category iteration
- Display: Shows separate averages for Starters, Mains, and Desserts on home screen
- Real-time: Updates automatically when dishes are added or removed

### 2. Separate Add Menu Item 
Implementation: Completely moved from homepage to dedicated screen
- File: /AddDishScreen.tsx`
- Features:
  - Full form validation for all fields (name, description, category, price)
  - Category selection with visual feedback
  - Real-time input validation
  - Success/error alert system
- Navigation: Integrated with main app navigation system

### 3. Separate Filter Screen 
Implementation: Created dedicated filtering screen for guests
- File: `/FilterMeScreen.tsx`
- Features:
  - Visual category cards with selection states
  - Dish count display for each category
  - Apply filter functionality
  - Show all dishes option
- Technology: Uses while loops for dish counting

### 4. Enhanced Data Management 
Implementation: Improved global data handling
- Global Variables: Implemented in `/MenuData.ts`
- Array Storage: Menu items stored in global `menuDishes` array
- State Management: Combined local React state with global data synchronization
 - Persistence: Data maintained across screen navigation

##  CODE REFACTORING & IMPROVEMENTS

### File Organization & Structure
Before Part 3:
- Single component files with mixed concerns
- Limited separation of logic and presentation
- Inline calculations and data management

After Part 3:

## UI/UX IMPROVEMENTS
Professional Styling
-Color Scheme: Professional green and white theme (#2e7d32 primary)

-Layout: Card-based design with shadows and proper spacing

-Typography: Consistent font sizes and weights across all screens

-Components: Reusable button styles and input fields

##  Enhanced User Experience
-Fixed Bottom Buttons: Always accessible action buttons

-Scroll Support: Smooth scrolling implemented for all screens

-Visual Feedback: Success/error alerts and loading states

-Empty States: Helpful messages when no data exists

-Form Validation: Comprehensive input validation with user feedback

## Navigation Improvements
-Simple Navigation: State-based navigation without external dependencies

-Consistent Flow: Predictable screen transitions

-Back Navigation: Easy return to home screen from all screens

## State Management
-Issue: Data inconsistency between screens

-Solution: Global variable synchronization with local state

-Result: Consistent data across all components and screens

## Performance Improvements
-Optimization: Efficient re-rendering with proper state management

-Memory: Proper cleanup and state initialization

-Calculation: Optimized average calculations with proper looping

## Technical Skills Demonstrated 
-Use for loops in TypeScript - Price calculations and dish counting

-Use while loops in TypeScript - Dish searching and validation

-Use for...in loops in TypeScript - Category-based operations and averages

-Define functions in TypeScript - Modular utility functions and components

-Use Global variables - Shared menu data across the application

-Use functions to organise code - Separated concerns and modular architecture



