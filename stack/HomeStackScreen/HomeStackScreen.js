import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, TouchableOpacity } from 'react-native';
import HomeScreen from '../../screens/PrivateScreen/HomeScreen/HomeScreen';
import AdsDetailsScreen from '../../screens/PrivateScreen/HomeScreen/AdsDetailsScreen/AdsDetailsScreen';
import SearchScreen from '../../screens/PrivateScreen/HomeScreen/SearchScreen/SearchScreen';
import NotificationsScreen from '../../screens/PrivateScreen/HomeScreen/NotificationsScreen/NotificationsScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeStack = createStackNavigator();

function HomeStackScreen({ navigation }) {
  const [unreadNotifications, setUnreadNotifications] = useState(0);

  // Fonction pour compter le nombre de notifications non lues
  const countUnreadNotifications = () => {
    // Mettez ici la logique pour obtenir le nombre de notifications non lues
    // Par exemple, vous pouvez utiliser un état ou récupérer les données de notification de votre backend
    // Ici, nous utilisons un état local fictif.
    const fakeUnreadCount = 2; // Remplacez par votre logique réelle
    return fakeUnreadCount;
  };

  useEffect(() => {
    // Mise à jour du nombre de notifications non lues
    const unreadCount = countUnreadNotifications();
    setUnreadNotifications(unreadCount);
  }, []);

  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={({ navigation }) => ({
        headerStyle: {
          backgroundColor: '#2E8B57',
        },
        headerTintColor: '#fff',
        headerRight: () => (
          <View style={{ flexDirection: 'row', marginRight: 20 }}>
            <TouchableOpacity
              onPress={() => {
                // Naviguer vers l'écran de recherche
                navigation.navigate('Search');
              }}>
              <Ionicons
                name="search-outline"
                size={30}
                color="#fff"
                style={{ marginRight: 20 }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                // Naviguer vers l'écran de notifications
                navigation.navigate('Notifications');
              }}>
              <View>
                <Ionicons name="notifications-outline" size={30} color="#fff" />
                {unreadNotifications > 0 && (
                  <View
                    style={{
                      position: 'absolute',
                      top: -5,
                      right: -5,
                      backgroundColor: 'red',
                      borderRadius: 10,
                      width: 20,
                      height: 20,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{ color: 'white', fontSize: 12 }}>
                      {unreadNotifications}
                    </Text>
                  </View>
                )}
              </View>
            </TouchableOpacity>
          </View>
        ),
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
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Accueil' }}
      />
      <HomeStack.Screen
        name="AdsDetails"
        component={AdsDetailsScreen}
        options={{ title: "Détails de l'annonce" }}
      />
      <HomeStack.Screen
        name="Search"
        component={SearchScreen}
        options={{ title: 'Barre de recherche' }}
      />
      <HomeStack.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{ title: 'Mes Notifications' }}
      />
    </HomeStack.Navigator>
  );
}

export default HomeStackScreen;
