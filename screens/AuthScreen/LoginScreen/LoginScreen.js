import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { CommonActions } from '@react-navigation/native';
import * as SecureStore from 'expo-secure-store';
import Spinner from '../../../components/Spinner';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [formError, setFormError] = useState(null);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isStoringToken, setIsStoringToken] = useState(false);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const storedToken = await SecureStore.getItemAsync('authToken');
        setLoading(false);
        if (storedToken) {
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: 'PrivatesRoutes' }],
            })
          );
        }
      } catch (error) {
        console.log('Error:', error);
        setFormError(
          `Une erreur s'est produite lors de l'authentification : ${error.message}`
        );
        setLoading(false);
      }
    };

    checkAuthentication();
  }, [navigation]);

  const validateEmail = (text) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    setIsValidEmail(emailPattern.test(text));
    setEmail(text);
  };

  const validatePassword = (text) => {
    setIsValidPassword(text.length >= 8);
    setPassword(text);
  };

  const storeAuthToken = async (token) => {
    try {
      setIsStoringToken(true);
      await SecureStore.setItemAsync('authToken', token);
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'PrivatesRoutes' }],
        })
      );
    } catch (error) {
      setFormError(
        `Une erreur s'est produite lors de la tentative de stockage du jeton d'authentification : ${error.message}`
      );
    } finally {
      setIsStoringToken(false);
    }
  };

  const handleSignIn = async () => {
    if (email.trim() === '' || password.trim() === '') {
      setFormError('Tous les champs sont obligatoires.');
      return;
    }

    if (!isValidEmail || !isValidPassword) {
      setFormError('Veuillez corriger les champs invalides.');
      return;
    }

    const authToken = 'votre-jeton-d-authentification';
    await storeAuthToken(authToken);
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled">
      <Text style={styles.title}>Connexion</Text>
      {formError && <Text style={styles.errorText}>{formError}</Text>}
      <View
        style={[
          styles.inputContainer,
          !isValidEmail && styles.invalidInputContainer,
        ]}>
        <Icon name="envelope" size={20} color="black" style={styles.icon} />
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
        <Icon name="lock" size={20} color="black" style={styles.icon} />
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
      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        {isStoringToken ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Se connecter</Text>
        )}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.secondaryButton}
        onPress={() => navigation.navigate('Register')}>
        <Text style={styles.secondaryButtonText}>Créer un compte</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.resetPasswordButton}
        onPress={() => navigation.navigate('ResetPassword')}>
        <Text style={styles.resetPasswordButtonText}>
          Mot de passe oublié ?
        </Text>
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
    fontSize: 28,
    marginBottom: 20,
    color: '#2E8B57',
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderBottomWidth: 2,
    borderBottomColor: '#2E8B57',
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
    color: '#333',
  },
  invalidInput: {
    color: 'red',
  },
  button: {
    backgroundColor: '#2E8B57',
    padding: 15,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  secondaryButton: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
    borderWidth: 1,
    borderColor: 'green',
  },
  secondaryButtonText: {
    color: 'green',
    fontSize: 18,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    marginTop: 10,
  },
  resetPasswordButton: {
    marginTop: 10,
  },
  resetPasswordButtonText: {
    color: 'green',
    fontSize: 16,
  },
  visibilityIcon: {
    position: 'absolute',
    right: 10,
    top: '80%',
    transform: [{ translateY: -10 }],
  },
});

export default LoginScreen;
