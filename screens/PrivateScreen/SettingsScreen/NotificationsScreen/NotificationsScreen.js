import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import Spinner from '../../../../components/Spinner';

const notifications = [
  {
    id: '4',
    title: 'Nouveau message',
    message: 'Vous avez reçu un nouveau message de John.',
    isRead: false, // Notification non lue
  },
  {
    id: '5',
    title: 'Promotion spéciale',
    message: 'Économisez 20% sur tous les articles ce week-end !',
    isRead: true, // Notification lue
  },
  {
    id: '6',
    title: `Mise à jour de l'application`,
    message: `Une nouvelle version de l'application est disponible.`,
    isRead: false, // Notification non lue
  },
];

const NotificationsScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Après 5 secondes, définissez le chargement sur false
    }, 5000); // 5000 millisecondes = 5 secondes
  }, []);

  const renderNotification = ({ item }) => (
    <View
      style={[
        styles.notificationContainer,
        item.isRead ? styles.readNotification : styles.unreadNotification,
      ]}>
      <Text style={styles.notificationTitle}>{item.title}</Text>
      <Text style={styles.notificationMessage}>{item.message}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {loading ? (
        // Affichez l'ActivityIndicator pendant le chargement
        <Spinner message="Chargement des notifications" />
      ) : (
        <FlatList
          data={notifications}
          renderItem={renderNotification}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContainer}
          ListEmptyComponent={
            <Text style={styles.emptyListText}>No notifications found</Text>
          }
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  listContainer: {
    flexGrow: 1,
  },
  notificationContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  readNotification: {
    // Style pour les notifications lues
    borderColor: '#ccc',
    borderWidth: 1,
  },
  unreadNotification: {
    // Style pour les notifications non lues
    borderColor: '#ff0000', // Par exemple, bordure rouge pour les notifications non lues
    borderWidth: 2,
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  notificationMessage: {
    fontSize: 16,
    color: '#888',
  },
  emptyListText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default NotificationsScreen;
