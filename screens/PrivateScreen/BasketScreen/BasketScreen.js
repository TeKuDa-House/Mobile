import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
  Modal,
  TextInput,
  Button,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Spinner from '../../../components/Spinner';

const BasketScreen = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otpCode, setOtpCode] = useState('');

  useEffect(() => {
    setTimeout(() => {
      const fakeCartItems = [
        { id: '1', name: 'Article 1', price: 20000 },
        { id: '2', name: 'Article 2', price: 30000 },
        { id: '3', name: 'Article 3', price: 15000 },
        { id: '4', name: 'Article 4', price: 25000 },
        { id: '5', name: 'Article 5', price: 10000 },
        { id: '6', name: 'Article 6', price: 1000 },
      ];

      setCartItems(fakeCartItems);
      setIsLoading(false);
    }, 5000);
  }, []);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const removeItem = (itemId) => {
    Alert.alert(
      'Confirmation de suppression',
      'Êtes-vous sûr de vouloir supprimer cet article du panier ?',
      [
        {
          text: 'Annuler',
          style: 'cancel',
        },
        {
          text: 'Supprimer',
          onPress: () => {
            const updatedCart = cartItems.filter(
              (cartItem) => cartItem.id !== itemId
            );
            setCartItems(updatedCart);
          },
        },
      ],
      { cancelable: false }
    );
  };

  const handleCheckout = () => {
    setIsModalVisible(true);
  };

  const handleConfirmPayment = () => {
    // Ajoutez ici la logique pour valider le paiement avec le numéro de téléphone et le code OTP
    // Une fois le paiement confirmé, vous pouvez réinitialiser le panier, cacher le modal, etc.
    // Exemple simplifié : réinitialisez le panier et cachez le modal
    setCartItems([]);
    setIsModalVisible(false);
    Alert.alert('Paiement confirmé', 'Produits payés avec succès.');
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>{item.price} FCFA</Text>
      <TouchableOpacity
        onPress={() => removeItem(item.id)}
        style={styles.removeButton}>
        <MaterialIcons name="delete" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Spinner message="Chargement des éléments du panier" />
      ) : (
        <ScrollView>
          {cartItems.length > 0 ? (
            <FlatList
              data={cartItems}
              renderItem={renderItem}
              keyExtractor={(item) => item.id.toString()}
            />
          ) : (
            <Text style={styles.emptyCartText}>Votre panier est vide.</Text>
          )}
        </ScrollView>
      )}
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total:</Text>
        <Text style={styles.totalPrice}>{calculateTotal()} FCFA</Text>
      </View>
      <TouchableOpacity onPress={handleCheckout} style={styles.checkoutButton}>
        <Text style={styles.checkoutButtonText}>Passer la commande</Text>
      </TouchableOpacity>

      {/* Modal pour la collecte du numéro de téléphone et du code OTP */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={handleCloseModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Validation du paiement</Text>
            <Text style={styles.instructionText}>
              Veuillez saisir les détails de paiement :
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Numéro de téléphone (ex. : 77000000)"
              value={phoneNumber}
              onChangeText={(text) => setPhoneNumber(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Code OTP (ex. : 123456)"
              value={otpCode}
              onChangeText={(text) => setOtpCode(text)}
            />
            <Button
              title="Confirmer le paiement"
              onPress={handleConfirmPayment}
            />
            <TouchableOpacity
              onPress={handleCloseModal}
              style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Fermer</Text>
            </TouchableOpacity>
          </View>
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
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 2,
  },
  itemName: {
    fontSize: 18,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  removeButton: {
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 8,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
  },
  emptyCartText: {
    fontSize: 16,
    textAlign: 'center',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 2,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  checkoutButton: {
    backgroundColor: '#007AFF',
    padding: 16,
    borderRadius: 8,
    marginTop: 16,
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 8,
    elevation: 5,
    width: '80%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 4,
  },
  instructionText: {
    fontSize: 16, // Taille de la police
    fontWeight: 'bold', // Texte en gras
    marginBottom: 10, // Espacement inférieur pour séparer du champ de saisie
  },
  closeButton: {
    backgroundColor: 'red', // Couleur de fond du bouton
    padding: 16,
    borderRadius: 8,
    marginTop: 16,
    alignItems: 'center',
  },
  closeButtonText: {
    color: 'white', // Couleur du texte du bouton
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default BasketScreen;
