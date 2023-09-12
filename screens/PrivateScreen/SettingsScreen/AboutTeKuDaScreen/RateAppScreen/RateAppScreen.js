import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';

const RateAppScreen = ({ navigation }) => {
  const [rating, setRating] = useState(0);

  const handleRating = (value) => {
    setRating(value);
  };

 const handleRateApp = () => {
  if (rating === 0) {
    Alert.alert('Note requise', 'Veuillez sélectionner une note pour l\'application.');
  } else if (rating >= 4) {
    // L'utilisateur est redirigé vers la page de notation de l'App Store / Google Play s'il donne une note élevée
    Alert.alert('Merci pour votre note !', 'Voulez-vous nous laisser un avis détaillé sur l\'App Store ou Google Play ?', [
      {
        text: 'Plus tard',
        style: 'cancel',
      },
      {
        text: 'Écrire un avis',
        onPress: () => {
          // Rediriger vers la page d'avis de l'App Store / Google Play
          // Ajoutez ici le code de redirection vers la page d'avis de l'App Store / Google Play
          // Par exemple, pour naviguer vers l'écran 'about' après une note élevée :
          navigation.navigate('AboutTeKuDa');
        },
      },
    ]);
  } else {
    // L'utilisateur a donné une note basse, peut-être voulez-vous lui demander des commentaires supplémentaires ici
    Alert.alert('Nous sommes désolés de votre expérience.', 'Voulez-vous nous envoyer des commentaires détaillés ?', [
      {
        text: 'Non, merci',
        style: 'cancel',
      },
      {
        text: 'Envoyer des commentaires',
        onPress: () => {
          // Rediriger l'utilisateur vers un écran pour envoyer des commentaires
          // Ajoutez ici le code de redirection vers l'écran de commentaires
          navigation.navigate('AboutTeKuDa');
        },
      },
    ]);
  }
};


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notez notre application</Text>
      <Text style={styles.subtitle}>Sélectionnez une note de 1 à 5</Text>
      <View style={styles.ratingContainer}>
        {[1, 2, 3, 4, 5].map((value) => (
          <TouchableOpacity
            key={value}
            style={[
              styles.ratingButton,
              rating >= value && styles.selectedRating,
            ]}
            onPress={() => handleRating(value)}>
            <Ionicons name="star" size={32} color="#FFD700" />
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={styles.rateButton} onPress={handleRateApp}>
        <Text style={styles.rateButtonText}>Noter l'application</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 16,
  },
  ratingContainer: {
    flexDirection: 'row',
  },
  ratingButton: {
    marginHorizontal: 5,
  },
  selectedRating: {
    backgroundColor: '#FFD700',
    borderRadius: 16,
    padding: 8,
  },
  rateButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 20,
  },
  rateButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default RateAppScreen;
