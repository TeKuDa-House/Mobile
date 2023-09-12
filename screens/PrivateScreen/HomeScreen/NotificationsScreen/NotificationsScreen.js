import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const NotificationsScreen = () => {
  const [notifications, setNotifications] = useState([
    {
      id: '1',
      title: 'Nouvelle notification',
      message: 'Vous avez reçu un nouveau message.',
      timestamp: 'Il y a 5 minutes',
      unread: true, // Définir comme non lu par défaut
    },
    {
      id: '2',
      title: 'Notification importante',
      message:
        "Mise à jour de l'application disponible. Veuillez la mettre à jour dès que possible.",
      timestamp: 'Hier',
      unread: true, // Définir comme non lu par défaut
    },
    // Ajoutez plus de notifications fictives ici
  ]);

  // Fonction pour compter le nombre de notifications non lues
  const countUnreadNotifications = () => {
    return notifications.filter((notification) => notification.unread).length;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notifications</Text>
      <Text style={styles.unreadCount}>
        {countUnreadNotifications()} Notifications non lues
      </Text>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.notificationItem}>
            <Text style={styles.notificationTitle}>{item.title}</Text>
            <Text style={styles.notificationMessage}>{item.message}</Text>
            <Text style={styles.notificationTimestamp}>{item.timestamp}</Text>
          </View>
        )}
      />
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
    color: '#333',
  },
  unreadCount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ff5722', // Couleur pour indiquer les non lus
    marginBottom: 16,
  },
  notificationItem: {
    marginBottom: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  notificationMessage: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  notificationTimestamp: {
    fontSize: 12,
    color: '#999',
  },
});

export default NotificationsScreen;
