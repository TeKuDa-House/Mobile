import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Modal from 'react-native-modal';

const windowWidth = Dimensions.get('window').width;

const AdsDetailsScreen = ({ route }) => {
  const { item } = route.params;

  const handleCartPress = () => {
    // Logique pour ajouter au panier
  };

  const handleFavoritePress = () => {
    // Logique pour ajouter aux favoris
  };

  const [isMessageModalVisible, setMessageModalVisible] = useState(false);
  const [message, setMessage] = useState('');

  const showMessageModal = () => {
    setMessageModalVisible(true);
  };

  const sendMessage = () => {
    // Logique pour envoyer le message
    // Utilisez la valeur de 'message' pour envoyer le message où vous le souhaitez
    // Une fois le message envoyé, réinitialisez 'message' à une chaîne vide
    setMessage('');
    setMessageModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={item.images}
        keyExtractor={(image, index) => index.toString()}
        renderItem={({ item: image }) => (
          <Image source={{ uri: image }} style={styles.image} />
        )}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>{item.price} FCFA</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.quantity}>
          Quantité disponible : {item.quantity}
        </Text>
        <View style={styles.actionButtons}>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={handleCartPress}>
            <FontAwesome5 name="shopping-cart" style={styles.actionIcon} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={handleFavoritePress}>
            <FontAwesome5 name="heart" style={styles.actionIcon} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={showMessageModal}>
            <FontAwesome5 name="envelope" style={styles.actionIcon} />
          </TouchableOpacity>
        </View>
      </View>
      <Modal isVisible={isMessageModalVisible}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Envoyer un Message</Text>
          <TextInput
            placeholder="Saisissez votre message..."
            value={message}
            onChangeText={(text) => setMessage(text)}
            style={styles.messageInput}
            multiline
          />
          <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
            <Text style={styles.sendButtonText}>Envoyer</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setMessageModalVisible(false)}>
            <Text style={styles.closeButtonText}>Fermer</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: windowWidth,
    height: windowWidth * 0.75,
    resizeMode: 'cover',
  },
  detailsContainer: {
    padding: 16,
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
  quantity: {
    fontSize: 16,
    marginBottom: 12,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  actionButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionIcon: {
    color: '#fff',
    fontSize: 24,
  },
  modalContainer: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  messageInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
  },
  sendButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  closeButton: {
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 8,
    marginTop: 8,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AdsDetailsScreen;
