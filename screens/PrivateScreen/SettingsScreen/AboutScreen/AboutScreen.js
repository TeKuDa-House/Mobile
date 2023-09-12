import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';

const AboutScreen = () => {
  // Tableau d'objets représentant chaque membre de l'équipe avec ses informations
  const teamMembers = [
    {
      name: 'PR OUEADRAGO',
      role: 'Fondateur',
      image: 'https://via.placeholder.com/200',
    },
    {
      name: 'Adama NIADA',
      role: 'Développeur principal',
      image: 'https://via.placeholder.com/200',
    },
    {
      name: 'Karabinta Hassane',
      role: 'Consultant en informatique',
      image: 'https://via.placeholder.com/200',
    },
    {
      name: 'Elyse SABIDANI',
      role: 'Développeur',
      image: 'https://via.placeholder.com/200',
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>À Propos de Nous</Text>
      <Text style={styles.description}>
        Bienvenue dans notre application de vente d'objets d'occasion en ligne.
        Notre mission est de fournir une plateforme conviviale pour acheter et
        vendre une grande variété d'articles d'occasion.
      </Text>
      <Text style={styles.description}>
        Nous nous efforçons de rendre l'expérience de nos utilisateurs aussi
        agréable que possible. Si vous avez des questions ou des commentaires,
        n'hésitez pas à nous contacter à l'adresse suivante :
        contact@example.com.
      </Text>

      {/* Équipe */}
      <View style={styles.teamSection}>
        <Text style={styles.sectionTitle}>Notre Équipe</Text>
        <View style={styles.teamContainer}>
          {teamMembers.map((member, index) => (
            <View key={index} style={styles.teamMember}>
              <Image
                source={{ uri: member.image }}
                style={styles.memberImage}
              />
              <Text style={styles.memberName}>{member.name}</Text>
              <Text style={styles.memberRole}>{member.role}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Contact */}
      <View style={styles.contactSection}>
        <Text style={styles.sectionTitle}>Contactez-Nous</Text>
        <Text style={styles.contactInfo}>
          Adresse : 123 Rue de l'Exemple, Ville, Pays
        </Text>
        <Text style={styles.contactInfo}>Email : contact@example.com</Text>
        <Text style={styles.contactInfo}>Téléphone : +123 456 789</Text>
      </View>
    </ScrollView>
  );
};

const windowWidth = Dimensions.get('window').width;

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
  description: {
    fontSize: 16,
    marginBottom: 16,
    color: '#666',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
    textAlign: 'center',
  },
  teamSection: {
    marginBottom: 32,
  },
  teamContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  teamMember: {
    width: windowWidth < 600 ? '100%' : '45%',
    padding: 10,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    alignItems: 'center',
  },
  memberImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 8,
  },
  memberName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  memberRole: {
    fontSize: 14,
    color: '#666',
  },
  contactSection: {
    marginBottom: 32,
  },
  contactInfo: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
    textAlign: 'center',
  },
});

export default AboutScreen;
