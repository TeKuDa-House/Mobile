import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const LanguageScreen = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('fr'); // Langue sélectionnée (par défaut : français)

  const handleLanguageChange = (language) => {
    // Implémentez ici la logique pour changer la langue de l'application
    setSelectedLanguage(language);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity
        style={[
          styles.languageButton,
          selectedLanguage === 'fr' && styles.selectedLanguage,
        ]}
        onPress={() => handleLanguageChange('fr')}>
        <Text style={styles.languageButtonText}>Français</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.languageButton,
          selectedLanguage === 'en' && styles.selectedLanguage,
        ]}
        onPress={() => handleLanguageChange('en')}>
        <Text style={styles.languageButtonText}>English</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.languageButton,
          selectedLanguage === 'es' && styles.selectedLanguage,
        ]}
        onPress={() => handleLanguageChange('es')}>
        <Text style={styles.languageButtonText}>Español</Text>
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
  languageButton: {
    backgroundColor: '#f7f7f7',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
  },
  selectedLanguage: {
    backgroundColor: '#007bff',
  },
  languageButtonText: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
  },
});

export default LanguageScreen;
