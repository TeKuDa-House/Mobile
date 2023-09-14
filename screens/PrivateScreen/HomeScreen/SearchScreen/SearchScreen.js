import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList } from 'react-native';

const SearchScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (text) => {
    // Ici, vous pouvez implémenter la logique de recherche en utilisant le texte saisi dans 'text'.
    // Par exemple, effectuez une requête à votre API pour récupérer les résultats de recherche.
    // Mettez à jour l'état de votre composant avec les résultats de la recherche.
    // Pour cet exemple, nous utilisons des résultats fictifs qui correspondent au texte saisi.

    const fakeSearchResults = [
      { id: '1', title: 'Résultat 1' },
      { id: '2', title: 'Résultat 2' },
      { id: '3', title: 'Résultat 3' },
    ];

    // Filtrer les résultats en fonction du texte saisi
    const filteredResults = fakeSearchResults.filter((result) =>
      result.title.toLowerCase().includes(text.toLowerCase())
    );

    setSearchResults(filteredResults);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recherche</Text>
      <TextInput
        style={styles.input}
        placeholder="Entrez votre recherche"
        onChangeText={(text) => {
          setSearchText(text);
          handleSearch(text);
        }}
        value={searchText}
      />

      {/* Affichage des résultats de recherche */}
      <Text style={styles.resultsTitle}>Résultats de la recherche :</Text>
      {searchResults.length === 0 ? (
        <Text style={styles.noResults}>Aucun résultat trouvé.</Text>
      ) : (
        <FlatList
          data={searchResults}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Text style={styles.resultItem}>{item.title}</Text>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 16,
    fontSize: 16,
  },
  resultsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
  },
  resultItem: {
    fontSize: 16,
    marginBottom: 8,
  },
  noResults: {
    fontSize: 16,
    fontStyle: 'italic',
  },
});

export default SearchScreen;
