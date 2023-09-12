import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ModalDropdown from 'react-native-modal-dropdown';
import Spinner from '../../../components/Spinner';

const HomeScreen = ({ navigation }) => {
  const [listings, setListings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState('Tri par défaut');

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

  const handleMessagePress = () => {
    Alert.alert('Envoyer un Message', 'Un message a été envoyé au vendeur.');
  };

  useEffect(() => {
    setTimeout(() => {
      const fakeListings = [
        {
          id: '1',
          title: 'Téléphone Samsung Galaxy S20',
          price: '196500',
          image: 'https://via.placeholder.com/640x480.png/00aacc?text=ads_img1',
        },
        {
          id: '2',
          title: 'Laptop Dell XPS 13',
          price: '400000',
          image: 'https://via.placeholder.com/640x480.png/002200?text=ads_img2',
        },
        {
          id: '3',
          title: 'Vélo de montagne Trek',
          price: '50000',
          image: 'https://via.placeholder.com/640x480.png/00aacc?text=ads_img3',
        },
        {
          id: '4',
          title: 'Vélo de montagne Trek',
          price: '500000',
          image: 'https://via.placeholder.com/640x480.png/yellow?text=ads_img3',
        },
        {
          id: '5',
          title: 'Vélo de montagne',
          price: '100000',
          image: 'https://via.placeholder.com/640x480.png/red?text=ads_img3',
        },
        {
          id: '6',
          title: 'Vélo de montagne',
          price: '100000',
          image: 'https://via.placeholder.com/640x480.png/red?text=ads_img3',
        },
        {
          id: '7',
          title: 'Vélo de montagne',
          price: '100000',
          image: 'https://via.placeholder.com/640x480.png/red?text=ads_img3',
        },
        {
          id: '8',
          title: 'Vélo de montagne',
          price: '100000',
          image: 'https://via.placeholder.com/640x480.png/red?text=ads_img3',
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
      <Image source={{ uri: item.image }} style={styles.listingImage} />
      <View style={styles.listingInfo}>
        <Text style={styles.listingTitle}>{item.title}</Text>
        <Text style={styles.listingPrice}>{item.price} FCFA</Text>
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
            onPress={handleMessagePress}
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
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
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
  },
  listingPrice: {
    fontSize: 16,
    color: '#333',
  },
  actionButtons: {
    flexDirection: 'row',
    marginTop: 8,
  },
  actionIcon: {
    fontSize: 24,
    color: '#007AFF',
    marginRight: 12,
  },
});

export default HomeScreen;
