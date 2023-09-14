import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Switch,
  TouchableOpacity,
  Alert,
} from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { useNavigation } from '@react-navigation/native';

const AccountSettingsScreen = () => {
  const navigation = useNavigation();
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const [biometricEnabled, setBiometricEnabled] = useState(false);
  const [isAccountDeactivated, setIsAccountDeactivated] = useState(false); // Ajout de l'état de désactivation du compte

  const toggleNotifications = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  const toggleDarkMode = () => {
    setDarkModeEnabled(!darkModeEnabled);
  };

  const toggleBiometric = () => {
    setBiometricEnabled(!biometricEnabled);
  };

  const handleSignOut = async () => {
    try {
      // Supprimer la clé d'authentification lors de la déconnexion
      await SecureStore.deleteItemAsync('authToken');

      // Réinitialisez les états ou effectuez d'autres actions nécessaires
      setNotificationsEnabled(false);
      setDarkModeEnabled(false);
      setBiometricEnabled(false);

      // Réinitialiser la pile de navigation pour empêcher le retour en arrière
      navigation.reset({
        index: 0,
        routes: [{ name: 'AuthRoutes' }], // Remplacez 'AuthRoutes' par le nom de votre route d'authentification
      });

      // Affichez un message de succès ou dites à l'utilisateur qu'il a été déconnecté avec succès
      Alert.alert(
        'Déconnexion réussie',
        'Vous avez été déconnecté avec succès.'
      );
    } catch (error) {
      // En cas d'erreur lors de la déconnexion, affichez un message d'erreur
      console.error('Erreur lors de la déconnexion :', error);
      Alert.alert(
        'Erreur de déconnexion',
        "Une erreur s'est produite lors de la déconnexion."
      );
    }
  };

  const confirmTemporarilyDeactivate = () => {
    Alert.alert(
      'Confirmer la désactivation temporaire',
      'Êtes-vous sûr de vouloir désactiver temporairement votre compte ?',
      [
        {
          text: 'Annuler',
          style: 'cancel',
        },
        {
          text: 'Confirmer',
          onPress: temporarilyDeactivateAccount,
        },
      ]
    );
  };

  const temporarilyDeactivateAccount = () => {
    // Ajoutez ici la logique pour désactiver temporairement le compte
    setIsAccountDeactivated(true); // Mettez à jour l'état pour indiquer que le compte est désactivé temporairement
    Alert.alert(
      'Compte désactivé temporairement',
      'Votre compte a été désactivé temporairement. Vous pouvez réactiver à tout moment.'
    );
  };

  const confirmDeleteAccount = () => {
    Alert.alert(
      'Confirmer la suppression du compte',
      'Êtes-vous sûr de vouloir supprimer définitivement votre compte ? Cette action est irréversible.',
      [
        {
          text: 'Annuler',
          style: 'cancel',
        },
        {
          text: 'Confirmer',
          onPress: deleteAccount,
          style: 'destructive',
        },
      ]
    );
  };

  const deleteAccount = async () => {
    // Ajoutez ici la logique pour supprimer définitivement le compte
    // (Le code précédent de suppression du compte reste inchangé)
  };

  const activateAccount = () => {
    // Ajoutez ici la logique pour réactiver le compte
    setIsAccountDeactivated(false); // Mettez à jour l'état pour indiquer que le compte est réactivé
    Alert.alert('Compte réactivé', 'Votre compte a été réactivé avec succès.');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Activer les notifications</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={toggleNotifications}
        />
      </View>

      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Mode sombre</Text>
        <Switch value={darkModeEnabled} onValueChange={toggleDarkMode} />
      </View>

      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>
          Activer la reconnaissance biométrique
        </Text>
        <Switch value={biometricEnabled} onValueChange={toggleBiometric} />
      </View>

      {isAccountDeactivated ? ( // Affiche le bouton d'activation si le compte est désactivé temporairement
        <TouchableOpacity
          style={styles.activateAccountButton}
          onPress={activateAccount}>
          <Text style={styles.buttonText}>Activer le compte</Text>
        </TouchableOpacity>
      ) : null}

      <TouchableOpacity
        style={styles.temporarilyDeactivateButton}
        onPress={confirmTemporarilyDeactivate}>
        <Text style={styles.buttonText}>
          Désactiver temporairement le compte
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.deleteAccountButton}
        onPress={confirmDeleteAccount}>
        <Text style={styles.buttonText}>
          Supprimer définitivement le compte
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
        <Text style={styles.buttonText}>Déconnexion</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  settingLabel: {
    fontSize: 18,
    color: '#333',
  },
  temporarilyDeactivateButton: {
    backgroundColor: '#ffc107',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  deleteAccountButton: {
    backgroundColor: 'red',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  signOutButton: {
    backgroundColor: 'blue',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 32,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  activateAccountButton: {
    backgroundColor: 'green',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
});

export default AccountSettingsScreen;
