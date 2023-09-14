import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Colors = {
  white: '#fff',
  green: '#2E8B57',
  black: '#333',
  gray: '#ccc',
  red: 'red',
};

const Strings = {
  title: 'Réinitialisation du Mot de Passe',
  success: 'Un lien de réinitialisation a été envoyé à votre e-mail.',
  error: 'Erreur lors de la réinitialisation du mot de passe',
  // ...
};

const { width } = Dimensions.get('window');
const isSmallScreen = width < 360;

const ResetPasswordScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [formError, setFormError] = useState(null);

  const handleResetPassword = async () => {
    // Implémentez ici la logique de réinitialisation de mot de passe
  };

  return (
    <KeyboardAvoidingView
      style={[
        styles.container,
        isSmallScreen && styles.smallScreenContainer, // Utilisation du style réactif
      ]}
      behavior="padding">
      <Text style={styles.title}>{Strings.title}</Text>
      {formError && <Text style={styles.errorText}>{formError}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Adresse e-mail"
        onChangeText={(text) => setEmail(text)}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
        <Text style={styles.buttonText}>Réinitialiser le Mot de Passe</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.secondaryButton}
        onPress={() => navigation.goBack()}>
        <Text style={styles.secondaryButtonText}>Retour</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    padding: 20,
  },
  smallScreenContainer: {
    padding: 10, // Réduit le rembourrage pour les petits écrans
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    color: Colors.green,
    fontWeight: 'bold',
  },
  input: {
    width: '90%',
    borderBottomWidth: 2,
    borderBottomColor: Colors.green,
    fontSize: 18,
    marginBottom: 15,
    paddingVertical: 10,
  },
  button: {
    backgroundColor: Colors.green,
    padding: 15,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    padding: 15,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
    borderWidth: 1,
    borderColor: Colors.green,
  },
  secondaryButtonText: {
    color: Colors.green,
    fontSize: 18,
    fontWeight: 'bold',
  },
  errorText: {
    color: Colors.red,
    fontSize: 16,
    marginTop: 10,
  },
});

export default ResetPasswordScreen;
