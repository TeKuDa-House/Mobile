import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, View } from 'react-native';
import BasketScreen from '../../screens/PrivateScreen/BasketScreen/BasketScreen'; // Import your Basket screen component

// A screen for navigating from the "Basket" screen
function BasketDetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to Checkout"
        onPress={() => navigation.navigate('Checkout')}
      />
    </View>
  );
}

const BasketStack = createStackNavigator();

function BasketStackScreen() {
  return (
    <BasketStack.Navigator
      initialRouteName="Basket"
      screenOptions={({ navigation }) => ({
        headerStyle: {
          backgroundColor: '#2E8B57',
        },
        headerTintColor: '#fff',
      })}
      tabBarOptions={{
        activeTintColor: '#3b82f6',
        inactiveTintColor: '#6b7280',
        style: {
          backgroundColor: '#fff',
          borderTopWidth: 0,
          elevation: 0,
        },
        labelStyle: {
          fontWeight: 'bold',
        },
      }}>
      <BasketStack.Screen
        name="Basket"
        component={BasketScreen}
        options={{
          tabBarLabel: 'Mon Panier',
          title: 'Mon Panier', // Titre du header
          headerTitleAlign: 'left', // Alignement du titre au centre
        }}
      />
      <BasketStack.Screen name="Details" component={BasketDetailsScreen} />
    </BasketStack.Navigator>
  );
}

export default BasketStackScreen;
