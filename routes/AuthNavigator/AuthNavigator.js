import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View } from 'react-native';

import LoginScreen from '../../screens/AuthScreen/LoginScreen/LoginScreen';
import RegisterScreen from '../../screens/AuthScreen/RegisterScreen/RegisterScreen';
import ResetPasswordScreen from '../../screens/AuthScreen/ResetPasswordScreen/ResetPasswordScreen';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#2E8B57', // Green header background
        },
        headerTintColor: 'white', // White header text color
        headerTitleStyle: {
          fontWeight: 'bold', // Bold header text
        },
      }}>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: 'Panneau De Connexion',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          title: `Panneau d'inscription`,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="ResetPassword"
        component={ResetPasswordScreen}
        options={{
          title: 'Réinitialiser le mot de passe',
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
