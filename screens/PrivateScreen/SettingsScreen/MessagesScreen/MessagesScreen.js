import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';

const initialMessages = [
  {
    id: '1',
    sender: 'John Doe',
    message: 'Salut, comment ça va ?',
    time: '11:30 AM',
    profileImage: 'https://via.placeholder.com/100',
  },
  // ... Autres messages initiaux ...
];

const MessagesScreen = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() === '') {
      // Empêchez l'envoi de messages vides
      return;
    }

    // Créez un nouveau message avec les détails appropriés (id, sender, time, profileImage, etc.)
    const newMessageItem = {
      id: String(Math.random()), // Vous pouvez utiliser une méthode plus robuste pour générer un ID unique
      sender: 'Votre Nom', // Remplacez par le nom de l'utilisateur actuel
      message: newMessage,
      time: new Date().toLocaleTimeString(),
      profileImage: 'https://via.placeholder.com/100',
    };

    // Mettez à jour la liste des messages en ajoutant le nouveau message
    setMessages([...messages, newMessageItem]);

    // Effacez le champ de saisie du message après l'envoi
    setNewMessage('');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.messageItem}>
            <Image
              source={{ uri: item.profileImage }}
              style={styles.profileImage}
            />
            <View style={styles.messageContent}>
              <Text style={styles.sender}>{item.sender}</Text>
              <Text style={styles.messageText}>{item.message}</Text>
              <Text style={styles.time}>{item.time}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      <TextInput
        style={styles.messageInput}
        placeholder="Saisissez votre message..."
        value={newMessage}
        onChangeText={(text) => setNewMessage(text)}
      />
      <TouchableOpacity
        style={styles.sendMessageButton}
        onPress={handleSendMessage}>
        <Text style={styles.sendMessageButtonText}>Envoyer</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  messageItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 12,
  },
  messageContent: {
    flex: 1,
  },
  sender: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  messageText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  time: {
    fontSize: 12,
    color: '#999',
  },
  messageInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  sendMessageButton: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendMessageButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MessagesScreen;
