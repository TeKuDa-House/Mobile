import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

const ProfileScreen = () => {
  const user = {
    nom: 'John Doe',
    email: 'johndoe@example.com',
    photo: 'https://via.placeholder.com/150', // Mettez à jour la source de l'image
    description:
      "Bienvenue sur mon profil. Je suis passionné par la vente d'articles d'occasion en ligne.",
    annonces: [
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
    ],
    adresse: "123 Rue de l'Exemple, Ville, Pays",
    telephone: '+123 456 789',
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileInfo}>
        <Image source={{ uri: user.photo }} style={styles.profilePhoto} />
        <Text style={styles.profileName}>{user.nom}</Text>
        <Text style={styles.profileEmail}>{user.email}</Text>
        <Text style={styles.profileDescription}>{user.description}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Mes Annonces</Text>
        {user.annonces.length > 0 ? (
          user.annonces.map((annonce) => (
            <TouchableOpacity
              key={annonce.id}
              style={styles.annonceItem}
              onPress={() => {
                // Ajoutez ici la navigation vers la page de détails de l'annonce
              }}>
              <Text style={styles.annonceTitre}>{annonce.titre}</Text>
              <Text style={styles.annonceDescription}>
                {annonce.description}
              </Text>
            </TouchableOpacity>
          ))
        ) : (
          <Text style={styles.emptyText}>
            Aucune annonce à afficher pour le moment.
          </Text>
        )}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Informations de Contact</Text>
        <Text style={styles.contactInfo}>{user.adresse}</Text>
        <Text style={styles.contactInfo}>Téléphone : {user.telephone}</Text>
      </View>

      {/* Éléments supplémentaires */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Éléments Supplémentaires</Text>
        {/* Ajoutez ici d'autres éléments ou informations de profil */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  profileInfo: {
    alignItems: 'center',
    marginBottom: 24,
  },
  profilePhoto: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 16,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  profileEmail: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
  },
  profileDescription: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  annonceItem: {
    backgroundColor: '#f7f7f7',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
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
  contactInfo: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
});

export default ProfileScreen;
