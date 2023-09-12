import React from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  StatusBar,
} from 'react-native';

const Spinner = ({ message }) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#2E8B57" barStyle="light-content" />
      <Text style={styles.appName}>TeKuDa</Text>
      <View style={styles.spinnerContainer}>
        <ActivityIndicator size="large" color="#2E8B57" />
      </View>
      {message && (
        <Text style={styles.message} adjustsFontSizeToFit={true}>
          {message}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  spinnerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(46, 139, 87, 0.7)',
    padding: 20,
    borderRadius: 10,
  },
  appName: {
    fontSize: 24, // Taille de police plus grande pour le nom de l'application
    fontWeight: 'bold', // Texte en gras
    marginBottom: 20, // Espace en bas du nom de l'application
    color: '#333', // Couleur du texte foncé
  },
  message: {
    marginTop: 20,
    fontSize: 18,
    color: '#2E8B57',
    textAlign: 'center',
    maxWidth: '80%',
  },
});

export default Spinner;
