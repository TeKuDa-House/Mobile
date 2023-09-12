import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, View } from 'react-native';
import SettingsScreen from '../../screens/PrivateScreen/SettingsScreen/SettingsScreen';

import GestionAnnoncesScreen from '../../screens/PrivateScreen/SettingsScreen/GestionAnnoncesScreen/GestionAnnoncesScreen';
import ProfileScreen from '../../screens/PrivateScreen/SettingsScreen/ProfileScreen/ProfileScreen';
import FavoritesScreen from '../../screens/PrivateScreen/SettingsScreen/FavoritesScreen/FavoritesScreen';
import NotificationsScreen from '../../screens/PrivateScreen/SettingsScreen/NotificationsScreen/NotificationsScreen';
import MessagesScreen from '../../screens/PrivateScreen/SettingsScreen/MessagesScreen/MessagesScreen';
import HistoryScreen from '../../screens/PrivateScreen/SettingsScreen/HistoryScreen/HistoryScreen';
import AccountSettingsScreen from '../../screens/PrivateScreen/SettingsScreen/AccountSettingsScreen/AccountSettingsScreen';
import LanguageScreen from '../../screens/PrivateScreen/SettingsScreen/LanguageScreen/LanguageScreen';
import TermsOfUseScreen from '../../screens/PrivateScreen/SettingsScreen/TermsOfUseScreen/TermsOfUseScreen';
import PushNotificationsScreen from '../../screens/PrivateScreen/SettingsScreen/PushNotificationsScreen/PushNotificationsScreen';
import ReviewsScreen from '../../screens/PrivateScreen/SettingsScreen/ReviewsScreen/ReviewsScreen';
import AboutScreen from '../../screens/PrivateScreen/SettingsScreen/AboutScreen/AboutScreen';
import FaqScreen from '../../screens/PrivateScreen/SettingsScreen/FaqScreen/FaqScreen';
import AboutTeKuDaScreen from '../../screens/PrivateScreen/SettingsScreen/AboutTeKuDaScreen/AboutTeKuDaScreen';
import RateAppScreen from '../../screens/PrivateScreen/SettingsScreen/AboutTeKuDaScreen/RateAppScreen/RateAppScreen';
import ContactUsScreen from '../../screens/PrivateScreen/SettingsScreen/AboutTeKuDaScreen/ContactUsScreen/ContactUsScreen';
import PrivacyPolicyScreen from '../../screens/PrivateScreen/SettingsScreen/AboutTeKuDaScreen/PrivacyPolicyScreen/PrivacyPolicyScreen';

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator
      initialRouteName="Settings"
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
      <SettingsStack.Screen
        name="Paramètres"
        component={SettingsScreen}
        options={{ title: 'Paramètres' }}
      />
      <SettingsStack.Screen
        name="GestionAnnonces"
        component={GestionAnnoncesScreen}
        options={{ title: 'Gestion des Annonces' }}
      />
      <SettingsStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: `Mon profile` }}
      />
      <SettingsStack.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{ title: `Mes favoris` }}
      />
      <SettingsStack.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{ title: `Mes notification` }}
      />
      <SettingsStack.Screen name="Messages" component={MessagesScreen} />
      <SettingsStack.Screen
        name="History"
        component={HistoryScreen}
        options={{ title: `Historique des Activités` }}
      />
      <SettingsStack.Screen
        name="AccountSettings"
        component={AccountSettingsScreen}
        options={{ title: `Parametre du compte` }}
      />
      <SettingsStack.Screen
        name="Language"
        component={LanguageScreen}
        options={{ title: `Parametre de langue` }}
      />
      <SettingsStack.Screen
        name="PushNotifications"
        component={PushNotificationsScreen}
        options={{ title: `Notification Push` }}
      />
      <SettingsStack.Screen
        name="Reviews"
        component={ReviewsScreen}
        options={{ title: `Avis et Commentaires` }}
      />
      <SettingsStack.Screen
        name="TermsOfUse"
        component={TermsOfUseScreen}
        options={{ title: `Condition d'utilistion` }}
      />
      <SettingsStack.Screen
        name="AboutUs"
        component={AboutScreen}
        options={{ title: `Qui sommes nous ?` }}
      />
      <SettingsStack.Screen
        name="FAQ"
        component={FaqScreen}
        options={{ title: `Foires Aux Questions` }}
      />
      <SettingsStack.Screen
        name="AboutTeKuDa"
        component={AboutTeKuDaScreen}
        options={{ title: `À propos de TeKuDa` }}
      />
      <SettingsStack.Screen
        name="ContactezNous"
        component={ContactUsScreen}
        options={{ title: `Nous contactez` }}
      />
      <SettingsStack.Screen
        name="PolitiqueDeConfidentialite"
        component={PrivacyPolicyScreen}
        options={{ title: `Nous contactez` }}
      />
      <SettingsStack.Screen
        name="RateApp"
        component={RateAppScreen}
        options={{ title: `Nous contactez` }}
      />
    </SettingsStack.Navigator>
  );
}

export default SettingsStackScreen;
