import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Dimensions,
} from 'react-native';
import { Ionicons } from 'react-native-vector-icons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const RateAppScreen = ({ navigation }) => {
  const [rating, setRating] = useState(0);

  const handleRating = (value) => {
    setRating(value);
  };

  const handleRateApp = () => {
    if (rating === 0) {
      Alert.alert(
        'Note requise',
        "Veuillez sélectionner une note pour l'application."
      );
    } else if (rating >= 4) {
      Alert.alert(
        'Merci pour votre note !',
        "Voulez-vous nous laisser un avis détaillé sur l'App Store ou Google Play ?",
        [
          {
            text: 'Plus tard',
            style: 'cancel',
          },
          {
            text: 'Écrire un avis',
            onPress: () => {
              navigation.navigate('AboutTeKuDa'); // Redirect to the review page
            },
          },
        ]
      );
    } else {
      Alert.alert(
        'Nous sommes désolés de votre expérience.',
        'Voulez-vous nous envoyer des commentaires détaillés ?',
        [
          {
            text: 'Non, merci',
            style: 'cancel',
          },
          {
            text: 'Envoyer des commentaires',
            onPress: () => {
              navigation.navigate('AboutTeKuDa'); // Redirect to the feedback page
            },
          },
        ]
      );
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
            <Ionicons name="star" size={windowWidth / 10} color="#FFD700" />
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
    paddingHorizontal: windowWidth * 0.1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: windowWidth / 14,
    fontWeight: 'bold',
    marginBottom: windowHeight * 0.02,
  },
  subtitle: {
    fontSize: windowWidth / 20,
    marginBottom: windowHeight * 0.02,
  },
  ratingContainer: {
    flexDirection: 'row',
  },
  ratingButton: {
    marginHorizontal: windowWidth * 0.02,
  },
  selectedRating: {
    backgroundColor: '#FFD700',
    borderRadius: windowWidth * 0.1,
    padding: windowWidth * 0.03,
  },
  rateButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: windowWidth * 0.15,
    paddingVertical: windowHeight * 0.02,
    borderRadius: windowWidth * 0.05,
    marginTop: windowHeight * 0.04,
  },
  rateButtonText: {
    color: '#fff',
    fontSize: windowWidth / 20,
    fontWeight: 'bold',
  },
});

export default RateAppScreen;
