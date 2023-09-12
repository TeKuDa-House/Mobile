import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const FavoritesScreen = () => {
  // Exemple de données d'éléments favoris de l'utilisateur
  const favoris = [
    {
      id: '1',
      titre: 'iPhone X à vendre',
      description: 'Excellent état, utilisé pendant 6 mois.',
    },
    {
      id: '2',
      titre: 'Ordinateur portable HP neuf',
      description: "Vente d'un ordinateur portable HP neuf sous emballage.",
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Vos Favoris</Text>

      {favoris.length > 0 ? (
        <FlatList
          data={favoris}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.favoriteItem}
              onPress={() => {
                // Ajoutez ici la navigation vers la page de détails de l'élément favori
              }}>
              <Text style={styles.favoriteTitre}>{item.titre}</Text>
              <Text style={styles.favoriteDescription}>{item.description}</Text>
            </TouchableOpacity>
          )}
        />
      ) : (
        <Text style={styles.emptyText}>
          Aucun élément favori pour le moment.
        </Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
    textAlign: 'center',
  },
  favoriteItem: {
    backgroundColor: '#f7f7f7',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
  },
  favoriteTitre: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  favoriteDescription: {
    fontSize: 16,
    color: '#666',
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});

export default FavoritesScreen;
