import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Vous pouvez remplacer 'FontAwesome' par la bibliothèque d'icônes de votre choix.
import { useNavigation } from '@react-navigation/native';
import * as SecureStore from 'expo-secure-store';

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [formError, setFormError] = useState(null);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const validateEmail = (text) => {
    // Implémentez votre logique de validation de l'e-mail ici
    // Par exemple, vérifiez s'il s'agit d'une adresse e-mail valide
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    setIsValidEmail(emailPattern.test(text));
    setEmail(text);
  };

  const validatePassword = (text) => {
    // Implémentez votre logique de validation du mot de passe ici
    // Par exemple, vérifiez s'il répond à certaines critères
    setIsValidPassword(text.length >= 8); // Exemple de validation : au moins 8 caractères
    setPassword(text);
  };

  const storeAuthToken = async () => {
    try {
      const authToken = await SecureStore.getItemAsync('authToken');
      // Utiliser le jeton récupéré
    } catch (error) {
      // Gérer l'erreur
      setFormError('Erreur lors de la récupération du jeton :', error);
    }
  };

  const handleSignUp = () => {
    if (email.trim() === '' || password.trim() === '') {
      setFormError('Tous les champs sont obligatoires.');
      return;
    }

    if (!isValidEmail || !isValidPassword) {
      setFormError('Veuillez corriger les champs invalides.');
      return;
    }

    // Tous les champs sont valides et non vides, procédez à la logique d'inscription
    // Implémentez votre logique d'inscription ici
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled">
      <Text style={styles.title}>Inscription</Text>
      {formError && <Text style={styles.errorText}>{formError}</Text>}
      <View
        style={[
          styles.inputContainer,
          !isValidEmail && styles.invalidInputContainer,
        ]}>
        <Icon name="envelope" size={20} color="#2E8B57" style={styles.icon} />
        <TextInput
          style={[styles.input, !isValidEmail && styles.invalidInput]}
          placeholder="Adresse e-mail"
          onChangeText={(text) => validateEmail(text)}
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>
      <View
        style={[
          styles.inputContainer,
          !isValidPassword && styles.invalidInputContainer,
        ]}>
        <Icon name="lock" size={20} color="#2E8B57" style={styles.icon} />
        <TextInput
          style={[styles.input, !isValidPassword && styles.invalidInput]}
          placeholder="Mot de passe"
          onChangeText={(text) => validatePassword(text)}
          value={password}
          secureTextEntry={!passwordVisible}
        />
        <TouchableOpacity
          onPress={() => setPasswordVisible(!passwordVisible)}
          style={styles.visibilityIcon}>
          <Icon
            name={passwordVisible ? 'eye-slash' : 'eye'}
            size={20}
            color="#2E8B57"
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>S'inscrire</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.secondaryButton}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.secondaryButtonText}>Se connecter</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 28, // Augmentation de la taille du titre
    marginBottom: 20,
    color: '#2E8B57', // Couleur verte pour correspondre au thème
    fontWeight: 'bold', // Texte en gras
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderBottomWidth: 2, // Utilisation d'une bordure inférieure pour le style
    borderBottomColor: '#2E8B57', // Couleur verte pour la bordure inférieure
    paddingVertical: 10, // Espacement vertical
    marginBottom: 15,
  },
  invalidInputContainer: {
    borderBottomColor: 'red',
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 18,
    color: '#333', // Couleur du texte
  },
  invalidInput: {
    color: 'red',
  },
  button: {
    backgroundColor: '#2E8B57',
    padding: 15, // Augmentation de la taille du bouton
    borderRadius: 25, // Bordure arrondie
    width: '100%',
    alignItems: 'center',
    marginTop: 20, // Augmentation de l'espacement supérieur
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold', // Texte en gras
  },
  secondaryButton: {
    backgroundColor: 'transparent', // Fond transparent
    padding: 15,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
    borderWidth: 1, // Bordure
    borderColor: '#2E8B57', // Couleur verte pour la bordure
  },
  secondaryButtonText: {
    color: '#2E8B57',
    fontSize: 18,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    marginTop: 10, // Augmentation de l'espacement supérieur
  },
  visibilityIcon: {
    position: 'absolute',
    right: 10,
    top: '80%', // Positionner l'icône au milieu de la hauteur du champ
    transform: [{ translateY: -10 }], // Ajustement pour centrer verticalement
  },
});

export default RegisterScreen;
