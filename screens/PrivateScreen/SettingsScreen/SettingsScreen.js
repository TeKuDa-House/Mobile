import React, { memo } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Importez l'icône depuis la bibliothèque de votre choix

const settingsData = [
  {
    id: 1,
    title: 'Gestion des Annonces',
    route: 'GestionAnnonces',
    iconName: 'announcement', // Icône pour le bouton Gestion des Annonces
  },
  {
    id: 3,
    title: 'Profil',
    route: 'Profile',
    iconName: 'person',
  },
  {
    id: 4,
    title: 'Favoris',
    route: 'Favorites',
    iconName: 'favorite',
  },
  {
    id: 5,
    title: 'Notifications',
    route: 'Notifications',
    iconName: 'notifications',
  },
  {
    id: 6,
    title: 'Messages',
    route: 'Messages',
    iconName: 'message',
  },
  {
    id: 8,
    title: 'Historique',
    route: 'History',
    iconName: 'history',
  },
  {
    id: 9,
    title: 'Paramètres de compte',
    route: 'AccountSettings',
    iconName: 'account-circle',
  },
  {
    id: 10,
    title: 'Langue',
    route: 'Language',
    iconName: 'language',
  },
  {
    id: 11,
    title: 'Notifications push',
    route: 'PushNotifications',
    iconName: 'notifications-active',
  },
  {
    id: 16,
    title: 'Avis et commentaires',
    route: 'Reviews',
    iconName: 'star',
  },
  {
    id: 13,
    title: "Conditions d'utilisation",
    route: 'TermsOfUse',
    iconName: 'description',
  },
  {
    id: 14,
    title: 'À propos de nous',
    route: 'AboutUs',
    iconName: 'info',
  },
  {
    id: 15,
    title: 'FAQ',
    route: 'FAQ',
    iconName: 'question-answer',
  },
  {
    id: 15,
    title: `Informations sur l'Apllication`,
    route: 'AboutTeKuDa',
    iconName: 'info',
  },
];

const ITEM_HEIGHT = 60; // Remplacez par la hauteur de chaque élément dans la liste

const SettingScreen = () => {
  const navigation = useNavigation();

  const handlePress = (route) => {
    // Logique de navigation ici
    console.log(`Naviguer vers : ${route}`);
    navigation.navigate(route);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => handlePress(item.route)}>
      <View style={styles.buttonContainer}>
        <Icon name={item.iconName} size={24} color="#333333" />
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <FlatList
          data={settingsData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()} // Convertir l'ID en chaîne
          showsVerticalScrollIndicator={false}
          getItemLayout={(data, index) => ({
            length: ITEM_HEIGHT,
            offset: ITEM_HEIGHT * index,
            index,
          })}
        />
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  scrollViewContent: {
    paddingBottom: 20,
  },
  item: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 16,
    marginBottom: 12,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    color: '#333333',
    marginLeft: 10,
  },
});

export default SettingScreen;
