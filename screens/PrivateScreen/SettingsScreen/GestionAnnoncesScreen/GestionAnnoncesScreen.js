import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Modal,
  TextInput,
  Button,
  Dimensions, // Import Dimensions
  PixelRatio, // Import PixelRatio
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const GestionAnnoncesScreen = () => {
  const isPortrait = () => {
    const { height, width } = Dimensions.get('window');
    return height > width;
  };

  const [annoncesActives, setAnnoncesActives] = useState([
    {
      id: '1',
      titre: 'iPhone X à vendre',
      description: 'Excellent état, utilisé pendant 6 mois.',
    },
    {
      id: '2',
      titre: 'Ordinateur portable HP neuf',
      description: "Vente d'un ordinateur portable HP neuf sous emballage.",
    },
  ]);

  const [annoncesExpirées, setAnnoncesExpirées] = useState([
    {
      id: '3',
      titre: 'Meuble TV en bois',
      description: 'Meuble TV en bois en bon état.',
    },
    {
      id: '4',
      titre: 'Vélo de montagne',
      description: 'Vélo de montagne à vendre, utilisé pendant 1 an.',
    },
  ]);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [nouvelleAnnonce, setNouvelleAnnonce] = useState({
    id: Math.random().toString(),
    titre: '',
    description: '',
  });

  const ajouterAnnonce = () => {
    setAnnoncesActives([...annoncesActives, nouvelleAnnonce]);
    setIsModalVisible(false);
    setNouvelleAnnonce({
      id: Math.random().toString(),
      titre: '',
      description: '',
    });
  };

  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        isPortrait() ? null : styles.landscapeContainer, // Apply landscape style
      ]}>
      <Text style={styles.subtitle}>Annonces Actives</Text>
      {annoncesActives.length > 0 ? (
        <FlatList
          data={annoncesActives}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.annonceItem}>
              <Ionicons name="ios-phone-portrait" size={24} color="#007bff" />
              <View style={styles.annonceTextContainer}>
                <Text style={styles.annonceTitre}>{item.titre}</Text>
                <Text style={styles.annonceDescription}>
                  {item.description}
                </Text>
              </View>
            </View>
          )}
        />
      ) : (
        <Text style={styles.emptyText}>
          Aucune annonce active pour le moment.
        </Text>
      )}

      <Text style={styles.subtitle}>Annonces Expirées ou Désactivées</Text>
      {annoncesExpirées.length > 0 ? (
        <FlatList
          data={annoncesExpirées}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.annonceItem}>
              <Ionicons name="ios-archive" size={24} color="#dc3545" />
              <View style={styles.annonceTextContainer}>
                <Text style={styles.annonceTitre}>{item.titre}</Text>
                <Text style={styles.annonceDescription}>
                  {item.description}
                </Text>
              </View>
            </View>
          )}
        />
      ) : (
        <Text style={styles.emptyText}>
          Aucune annonce expirée ou désactivée pour le moment.
        </Text>
      )}

      <TouchableOpacity
        onPress={() => setIsModalVisible(true)}
        style={styles.ajouterAnnonceButton}>
        <Text style={styles.ajouterAnnonceText}>Créer une annonce</Text>
      </TouchableOpacity>

      <Modal visible={isModalVisible} animationType="slide" transparent={false}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Créer une annonce</Text>
          <TextInput
            placeholder="Titre de l'annonce"
            style={styles.input}
            value={nouvelleAnnonce.titre}
            onChangeText={(text) =>
              setNouvelleAnnonce({ ...nouvelleAnnonce, titre: text })
            }
          />
          <TextInput
            placeholder="Description de l'annonce"
            style={[styles.input, styles.multilineInput]}
            value={nouvelleAnnonce.description}
            onChangeText={(text) =>
              setNouvelleAnnonce({ ...nouvelleAnnonce, description: text })
            }
            multiline
          />
          {/* Ajout du champ de chargement de photos */}
          <TouchableOpacity style={styles.uploadButton}>
            <Ionicons name="ios-cloud-upload" size={32} color="#007bff" />
            <Text style={styles.uploadText}>Télécharger des photos</Text>
          </TouchableOpacity>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.modalButton, styles.ajouterButton]}
              onPress={ajouterAnnonce}>
              <Text style={styles.buttonText}>Ajouter</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.modalButton, styles.annulerButton]}
              onPress={() => setIsModalVisible(false)}>
              <Text style={styles.buttonText}>Annuler</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  landscapeContainer: {
    flexDirection: 'row', // Landscape layout
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    marginTop: 24,
    color: '#333',
  },
  annonceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    flex: 1, // Expand to fill available space in landscape mode
  },
  annonceTextContainer: {
    marginLeft: 16,
  },
  annonceTitre: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  annonceDescription: {
    fontSize: 16,
    color: '#666',
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  ajouterAnnonceButton: {
    backgroundColor: '#007bff',
    alignItems: 'center',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  ajouterAnnonceText: {
    color: 'white',
    fontSize: 18,
  },
  modalContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#333',
    marginBottom: 16,
    fontSize: PixelRatio.getFontScale() * 16, // Responsive font size
  },
  multilineInput: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  modalButton: {
    flex: 1,
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: 'center',
  },
  ajouterButton: {
    backgroundColor: '#007bff',
    marginRight: 8,
  },
  annulerButton: {
    backgroundColor: '#dc3545',
    marginLeft: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: PixelRatio.getFontScale() * 18, // Responsive font size
  },
  uploadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  uploadText: {
    color: '#007bff',
    fontSize: PixelRatio.getFontScale() * 18, // Responsive font size
    marginLeft: 8,
  },
});

export default GestionAnnoncesScreen;
