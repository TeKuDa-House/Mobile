import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
  TextInput,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ModalDropdown from 'react-native-modal-dropdown';
import Modal from 'react-native-modal';
import Spinner from '../../../components/Spinner';

const HomeScreen = ({ navigation }) => {
  const [listings, setListings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState('Tri par défaut');
  const [isMessageModalVisible, setMessageModalVisible] = useState(false);
  const [message, setMessage] = useState('');

  // Fonction pour trier les annonces en fonction de l'option sélectionnée
  const sortListings = (option) => {
    let sortedListings = [...listings];

    switch (option) {
      case 'Prix croissant':
        sortedListings.sort((a, b) => (a.price > b.price ? 1 : -1));
        break;
      case 'Prix décroissant':
        sortedListings.sort((a, b) => (a.price < b.price ? 1 : -1));
        break;
      case 'Nouveautés':
        sortedListings.sort((a, b) => (a.id < b.id ? 1 : -1));
        break;
      default:
        // Tri par défaut, ne rien faire
        break;
    }

    setListings(sortedListings);
  };

  const handleCartPress = () => {
    Alert.alert('Ajouter au Panier', "L'article a été ajouté à votre panier.");
  };

  const handleFavoritePress = () => {
    Alert.alert('Ajouter aux Favoris', "L'article a été ajouté à vos favoris.");
  };

  const showMessageModal = () => {
    setMessageModalVisible(true);
  };

  const sendMessage = () => {
    // Logique pour envoyer le message
    // Vous pouvez utiliser la valeur de 'message' pour envoyer le message où vous le souhaitez
    // Une fois le message envoyé, réinitialisez 'message' à une chaîne vide
    setMessage('');
    setMessageModalVisible(false);
  };

  useEffect(() => {
    setTimeout(() => {
      const fakeListings = [
        {
          id: '1',
          title: 'Téléphone Samsung Galaxy S20',
          price: '196500',
          images: [
            'https://via.placeholder.com/640x480.png/red?text=ads_img1_1',
            'https://via.placeholder.com/640x480.png/00aacc?text=ads_img1_2',
            'https://via.placeholder.com/640x480.png/green?text=ads_img1_3',
            'https://via.placeholder.com/640x480.png/blue?text=ads_img1_4',
            'https://via.placeholder.com/640x480.png/purple?text=ads_img1_5',
          ],
          description: 'Un téléphone Samsung Galaxy S20 en excellent état.',
          quantity: 5,
        },
        {
          id: '2',
          title: 'Laptop Dell XPS 13',
          price: '400000',
          images: [
            'https://via.placeholder.com/640x480.png/yellow?text=ads_img2_1',
            'https://via.placeholder.com/640x480.png/002200?text=ads_img2_2',
            'https://via.placeholder.com/640x480.png/gray?text=ads_img2_3',
            'https://via.placeholder.com/640x480.png/orange?text=ads_img2_4',
            'https://via.placeholder.com/640x480.png/pink?text=ads_img2_5',
          ],
          description:
            'Un ordinateur portable Dell XPS 13 de dernière génération.',
          quantity: 7,
        },
        {
          id: '3',
          title: 'Vélo de montagne Trek',
          price: '50000',
          images: [
            'https://via.placeholder.com/640x480.png/red?text=ads_img3_1',
            'https://via.placeholder.com/640x480.png/00aacc?text=ads_img3_2',
            'https://via.placeholder.com/640x480.png/green?text=ads_img3_3',
            'https://via.placeholder.com/640x480.png/blue?text=ads_img3_4',
            'https://via.placeholder.com/640x480.png/purple?text=ads_img3_5',
          ],
          description:
            'Un vélo de montagne Trek pour les aventures en plein air.',
          quantity: 3,
        },
        {
          id: '4',
          title: 'Casque Audio Bluetooth Sony',
          price: '75000',
          images: [
            'https://via.placeholder.com/640x480.png/gray?text=ads_img4_1',
            'https://via.placeholder.com/640x480.png/ff5500?text=ads_img4_2',
            'https://via.placeholder.com/640x480.png/red?text=ads_img4_3',
            'https://via.placeholder.com/640x480.png/yellow?text=ads_img4_4',
            'https://via.placeholder.com/640x480.png/green?text=ads_img4_5',
          ],
          description: 'Un casque audio Bluetooth Sony de haute qualité.',
          quantity: 10,
        },
      ];

      setListings(fakeListings);
      setIsLoading(false);
    }, 5000);
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('AdsDetails', { item })}
      style={styles.listingContainer}>
      {item.images && item.images.length > 0 && (
        <Image source={{ uri: item.images[0] }} style={styles.listingImage} />
      )}
      <View style={styles.listingInfo}>
        <Text style={styles.listingTitle}>{item.title}</Text>
        <Text style={styles.listingPrice}>{item.price} FCFA</Text>
        <Text style={styles.listingQuantity}>
          Quantité disponible : {item.quantity}
        </Text>
        <View style={styles.actionButtons}>
          <FontAwesome5
            name="shopping-cart"
            style={styles.actionIcon}
            onPress={handleCartPress}
          />
          <FontAwesome5
            name="heart"
            style={styles.actionIcon}
            onPress={handleFavoritePress}
          />
          <FontAwesome5
            name="envelope"
            style={styles.actionIcon}
            onPress={showMessageModal}
          />
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ModalDropdown
          options={[
            'Tri par défaut',
            'Prix croissant',
            'Prix décroissant',
            'Nouveautés',
          ]}
          defaultValue={sortBy}
          onSelect={(index, option) => {
            setSortBy(option);
            sortListings(option);
          }}
          style={styles.dropdown}
          textStyle={styles.dropdownText}
          dropdownStyle={styles.dropdownContainer}
          dropdownTextStyle={styles.dropdownItemText}
          dropdownTextHighlightStyle={styles.dropdownItemHighlightedText}
        />
      </View>
      {isLoading ? (
        <Spinner message="Chargement des données" />
      ) : (
        <FlatList
          data={listings}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
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
    padding: 16,
    backgroundColor: '#f5f5f5',
    marginBottom: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 16,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
  },
  dropdownText: {
    fontSize: 16,
  },
  dropdownContainer: {
    width: 200,
  },
  dropdownItemText: {
    fontSize: 16,
    padding: 8,
  },
  dropdownItemHighlightedText: {
    color: 'orange',
  },
  listingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 12,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  listingImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 12,
  },
  listingInfo: {
    flex: 1,
  },
  listingTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  listingPrice: {
    fontSize: 16,
    color: '#007AFF',
  },
  actionButtons: {
    flexDirection: 'row',
    marginTop: 8,
  },
  actionIcon: {
    fontSize: 24,
    color: '#333',
    marginRight: 12,
  },
  listingQuantity: {
    fontSize: 14,
    color: '#666',
    marginTop: 8,
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  messageInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
    height: 100,
  },
  sendButton: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    marginBottom: 8,
  },
  sendButtonText: {
    color: 'white',
    fontSize: 16,
  },
  closeButton: {
    backgroundColor: 'red',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default HomeScreen;
