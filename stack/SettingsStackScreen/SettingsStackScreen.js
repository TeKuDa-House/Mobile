import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

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

const screens = [
  { name: 'Paramètres', component: SettingsScreen },
  {
    name: 'GestionAnnonces',
    component: GestionAnnoncesScreen,
    title: 'Gestion des Annonces',
  },
  { name: 'Profile', component: ProfileScreen, title: 'Mon profile' },
  { name: 'Favorites', component: FavoritesScreen, title: 'Mes favoris' },
  {
    name: 'Notifications',
    component: NotificationsScreen,
    title: 'Mes notification',
  },
  { name: 'Messages', component: MessagesScreen },
  {
    name: 'History',
    component: HistoryScreen,
    title: 'Historique des Activités',
  },
  {
    name: 'AccountSettings',
    component: AccountSettingsScreen,
    title: 'Parametre du compte',
  },
  { name: 'Language', component: LanguageScreen, title: 'Langue de l\'Application' },
  {
    name: 'PushNotifications',
    component: PushNotificationsScreen,
    title: 'Notification Push',
  },
  { name: 'Reviews', component: ReviewsScreen, title: 'Avis et Commentaires' },
  {
    name: 'TermsOfUse',
    component: TermsOfUseScreen,
    title: "Condition d'utilistion",
  },
  { name: 'AboutUs', component: AboutScreen, title: 'Qui sommes nous ?' },
  { name: 'FAQ', component: FaqScreen, title: 'Foires Aux Questions' },
  {
    name: 'AboutTeKuDa',
    component: AboutTeKuDaScreen,
    title: 'À propos de TeKuDa',
  },
  {
    name: 'ContactezNous',
    component: ContactUsScreen,
    title: 'Nous contactez',
  },
  {
    name: 'PolitiqueDeConfidentialite',
    component: PrivacyPolicyScreen,
    title: 'Politique de confidentialité',
  },
  {
    name: 'RateApp',
    component: RateAppScreen,
    title: "Notation de l'application",
  },
];

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator
      initialRouteName="Paramètres"
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
      {screens.map((screen, index) => (
        <SettingsStack.Screen
          key={index}
          name={screen.name}
          component={screen.component}
          options={{ title: screen.title || screen.name }}
        />
      ))}
    </SettingsStack.Navigator>
  );
}

export default SettingsStackScreen;
