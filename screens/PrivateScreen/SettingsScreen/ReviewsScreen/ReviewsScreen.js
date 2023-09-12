import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, FlatList } from 'react-native';

const ReviewsScreen = () => {
  const [reviews, setReviews] = useState([
    {
      id: '1',
      user: 'John Doe',
      rating: 5,
      comment: 'Très bonne application, je recommande!',
      date: '02/09/2023',
    },
    {
      id: '2',
      user: 'Jane Smith',
      rating: 4,
      comment: `Bonne expérience d'achat, mais quelques bugs mineurs.`,
      date: '01/09/2023',
    },
    {
      id: '3',
      user: 'Robert Johnson',
      rating: 3,
      comment: `L'application pourrait être améliorée en termes de convivialité.`,
      date: '30/08/2023',
    },
  ]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Avis des Utilisateurs</Text>

      {reviews.length > 0 ? (
        <FlatList
          data={reviews}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.reviewItem}>
              <Text style={styles.userName}>{item.user}</Text>
              <Text style={styles.rating}>Note : {item.rating}/5</Text>
              <Text style={styles.comment}>{item.comment}</Text>
              <Text style={styles.date}>Date : {item.date}</Text>
            </View>
          )}
        />
      ) : (
        <Text style={styles.emptyText}>
          Aucun avis disponible pour le moment.
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
  reviewItem: {
    backgroundColor: '#f7f7f7',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  rating: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  comment: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  date: {
    fontSize: 14,
    color: '#999',
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});

export default ReviewsScreen;
