import * as React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../../screens/AuthScreen/LoginScreen/LoginScreen';
import RegisterScreen from '../../screens/AuthScreen/RegisterScreen/RegisterScreen';
import ResetPasswordScreen from '../../screens/AuthScreen/ResetPasswordScreen/ResetPasswordScreen';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63', // Couleur de l'icône active
        headerStyle: {
          backgroundColor: '#333', // Couleur de fond du header
        },
        headerTintColor: 'white', // Couleur du texte du header
        headerTitleStyle: {
          fontWeight: 'bold', // Style du texte du header
        },
      }}>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          tabBarLabel: 'Connexion',
          title: 'Connexion', // Titre du header
          headerTitleAlign: 'center', // Alignement du titre au centre
        }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          tabBarLabel: 'Inscription',
          title: 'Inscription', // Titre du header
          headerTitleAlign: 'center', // Alignement du titre au centre
        }}
      />
      <Stack.Screen
        name="ResetPassword"
        component={ResetPasswordScreen}
        options={{
          tabBarLabel: 'Réinitialiser le mot de passe',
          title: 'Réinitialiser le mot de passe', // Titre du header
          headerTitleAlign: 'center', // Alignement du titre au centre
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
