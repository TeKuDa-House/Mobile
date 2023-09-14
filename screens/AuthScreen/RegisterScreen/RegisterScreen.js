import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const Colors = {
  white: '#fff',
  green: '#2E8B57',
  black: '#333',
  gray: '#ccc',
  red: 'red',
};

const Strings = {
  title: 'Inscription',
};

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [isValidConfirmPassword, setIsValidConfirmPassword] = useState(true);
  const [formError, setFormError] = useState(null);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const validateEmail = (text) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    setIsValidEmail(emailPattern.test(text));
    setEmail(text);
  };

  const validatePassword = (text) => {
    setIsValidPassword(text.length >= 8);
    setPassword(text);
  };

  const validateConfirmPassword = (text) => {
    setIsValidConfirmPassword(text === password);
    setConfirmPassword(text);
  };

  const handleSignUp = () => {
    if (
      email.trim() === '' ||
      password.trim() === '' ||
      confirmPassword.trim() === ''
    ) {
      setFormError('Tous les champs sont obligatoires.');
      return;
    }

    if (!isValidEmail || !isValidPassword || !isValidConfirmPassword) {
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
      <Text style={styles.title}>{Strings.title}</Text>
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
      <View
        style={[
          styles.inputContainer,
          !isValidConfirmPassword && styles.invalidInputContainer,
        ]}>
        <Icon name="lock" size={20} color="#2E8B57" style={styles.icon} />
        <TextInput
          style={[styles.input, !isValidConfirmPassword && styles.invalidInput]}
          placeholder="Confirmez le mot de passe"
          onChangeText={(text) => validateConfirmPassword(text)}
          value={confirmPassword}
          secureTextEntry={!passwordVisible}
        />
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
    backgroundColor: Colors.white,
    padding: 20,
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    color: Colors.green,
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderBottomWidth: 2,
    borderBottomColor: Colors.green,
    paddingVertical: 10,
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
    color: Colors.black,
  },
  invalidInput: {
    color: 'red',
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
  visibilityIcon: {
    position: 'absolute',
    right: 10,
    top: '80%',
    transform: [{ translateY: -10 }],
  },
});

export default RegisterScreen;
