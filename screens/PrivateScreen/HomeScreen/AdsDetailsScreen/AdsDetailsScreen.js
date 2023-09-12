import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const AdsDetailsScreen = ({ route }) => {
  const { item } = route.params; // Obtenir l'objet d'annonce de la navigation

  return (
    <View style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.price}>{item.price}</Text>
        </View>
        <Text style={styles.description}>
          {/* Ajoutez la description de l'annonce ici */}
        </Text>
        <Text style={styles.location}>
          {/* Ajoutez l'emplacement de l'annonce ici */}
        </Text>
        <Text style={styles.date}>
          {/* Ajoutez la date de publication de l'annonce ici */}
        </Text>
        {/* Ajoutez d'autres détails de l'annonce ici si nécessaire */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  detailsContainer: {
    padding: 16,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 20,
    color: 'green',
  },
  description: {
    fontSize: 16,
    marginBottom: 12,
  },
  location: {
    fontSize: 16,
    marginBottom: 12,
  },
  date: {
    fontSize: 16,
    color: 'gray',
  },
  // Ajoutez des styles supplémentaires pour d'autres détails de l'annonce ici
});

export default AdsDetailsScreen;
