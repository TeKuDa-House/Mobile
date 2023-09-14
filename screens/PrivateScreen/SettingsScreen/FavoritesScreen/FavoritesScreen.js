import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  FlatList,
  Alert,
  TouchableOpacity,
} from 'react-native';

const FavoritesScreen = () => {
  // Example data of user's favorite items
  const [favoris, setFavoris] = useState([
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
    {
      id: '3',
      titre: 'Tablette Samsung Galaxy',
      description: 'Tablette Android en parfait état, avec accessoires.',
    },
    {
      id: '4',
      titre: 'Console de jeux PS5',
      description: 'PS5 en excellent état avec manette et jeux inclus.',
    },
    {
      id: '5',
      titre: 'Caméra Canon EOS 5D Mark IV',
      description: 'Appareil photo professionnel en excellent état.',
    },
  ]);

  // Function to remove a favorite item
  const supprimerFavori = (id) => {
    const newFavoris = favoris.filter((item) => item.id !== id);
    setFavoris(newFavoris);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {favoris.length > 0 ? (
        <FlatList
          data={favoris}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.favoriteItem}
              onPress={() => {
                Alert.alert(item.titre);
              }}>
              <Text style={styles.favoriteTitre}>{item.titre}</Text>
              <Text style={styles.favoriteDescription}>{item.description}</Text>
              <TouchableOpacity
                onPress={() => {
                  // Call the function to remove the favorite item
                  supprimerFavori(item.id);
                }}
                style={styles.deleteButton}>
                <Text style={styles.deleteButtonText}>Supprimer</Text>
              </TouchableOpacity>
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
  deleteButton: {
    backgroundColor: '#dc3545',
    alignItems: 'center',
    padding: 8,
    borderRadius: 4,
    marginTop: 8,
  },
  deleteButtonText: {
    color: 'white',
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});

export default FavoritesScreen;
