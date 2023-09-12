import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  MaterialCommunityIcons,
  AntDesign,
} from '@expo/vector-icons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { View, Text, StyleSheet } from 'react-native';

import HomeStackScreen from '../../stack/HomeStackScreen/HomeStackScreen';
import BasketStackScreen from '../../stack/BasketStackScreen/BasketStackScreen';
import SettingsStackScreen from '../../stack/SettingsStackScreen/SettingsStackScreen';

const Tab = createBottomTabNavigator();

const TabIcon = ({ name, color, size }) => {
  return <MaterialCommunityIcons name={name} color={color} size={size} />;
};

function MyTabs() {
  const [cartItems, setCartItems] = useState(5); // Nombre d'articles dans le panier

  return (
    <Tab.Navigator
      initialRouteName="Accueil"
      screenOptions={{
        headerShown: false, // Masquer l'en-tête pour toutes les écrans de cette pile
        tabBarActiveTintColor: 'blue', // Couleur pour l'onglet actif
        tabBarInactiveTintColor: 'gray', // Couleur pour les onglets inactifs
        tabBarStyle: {
          backgroundColor: 'white', // Couleur de fond de la barre d'onglets
          borderTopWidth: 1, // Ajouter une bordure supérieure
          borderTopColor: 'gray', // Couleur de la bordure
        },
      }}>
      <Tab.Screen
        name="Accueil"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Accueil',
          tabBarIcon: ({ color, size }) => (
            <TabIcon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Panier"
        component={BasketStackScreen}
        options={{
          tabBarLabel: 'Mon Panier',
          tabBarIcon: ({ color, size }) => (
            <View style={{ position: 'relative' }}>
              <FontAwesome5 name="shopping-cart" color={color} size={size} />
              {cartItems > 0 && (
                <View style={styles.cartBadge}>
                  <Text style={styles.cartBadgeText}>{cartItems}</Text>
                </View>
              )}
            </View>
          ),
          tabBarStyle: {
            backgroundColor: 'white', // Couleur de fond de la barre d'onglets
            borderTopWidth: 1, // Ajouter une bordure supérieure
            borderTopColor: 'gray', // Couleur de la bordure
          },
          tabBarLabelStyle: {
            fontSize: 16, // Taille du texte de l'onglet
            fontWeight: 'bold', // Texte en gras
          },
          tabBarActiveTintColor: 'blue', // Couleur du texte et de l'icône de l'onglet actif
          tabBarInactiveTintColor: 'gray', // Couleur du texte et de l'icône des onglets inactifs
        }}
      />

      <Tab.Screen
        name="Paramètres"
        component={SettingsStackScreen}
        options={{
          tabBarLabel: 'Paramètres',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="setting" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  cartBadge: {
    position: 'absolute',
    top: -12, // Ajuster la position vers le haut pour le cercle
    right: -12, // Ajuster la position vers la droite pour le cercle
    backgroundColor: 'red',
    borderRadius: 50, // Arrondir en cercle
    width: 24, // Largeur et hauteur adaptées au cercle
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black', // Couleur de l'ombre
    shadowOffset: { width: 0, height: 2 }, // Décalage de l'ombre
    shadowOpacity: 0.4, // Opacité de l'ombre
    shadowRadius: 4, // Rayon de l'ombre
    elevation: 4, // Élévation de l'ombre pour Android
  },
  cartBadgeText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
});

const PrivateRoutes = () => {
  return <MyTabs />;
};

export default PrivateRoutes;
