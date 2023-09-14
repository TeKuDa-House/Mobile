import React from 'react';
import { View, Text, ScrollView, StyleSheet, FlatList } from 'react-native';

const HistoryScreen = () => {
  // Exemple de données d'historique des activités de l'utilisateur
  const historique = [
    {
      id: '1',
      action: 'Consultation',
      details: 'Annonce : iPhone X à vendre',
      date: '01/09/2023',
    },
    {
      id: '2',
      action: 'Consultation',
      details: 'Annonce : Ordinateur portable HP neuf',
      date: '30/08/2023',
    },
    {
      id: '3',
      action: 'Consultation',
      details: 'Annonce : Meuble TV en bois',
      date: '28/08/2023',
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {historique.length > 0 ? (
        <FlatList
          data={historique}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.activityItem}>
              <Text style={styles.activityAction}>{item.action}</Text>
              <Text style={styles.activityDetails}>{item.details}</Text>
              <Text style={styles.activityDate}>{item.date}</Text>
            </View>
          )}
        />
      ) : (
        <Text style={styles.emptyText}>
          Aucune activité récente à afficher.
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
  activityItem: {
    backgroundColor: '#f7f7f7',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
  },
  activityAction: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  activityDetails: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  activityDate: {
    fontSize: 14,
    color: '#999',
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});

export default HistoryScreen;
