import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const TermsOfUseScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>1. Acceptation des Conditions</Text>
        <Text style={styles.paragraph}>
          En utilisant cette application, vous acceptez de vous conformer à ces
          conditions d'utilisation, à notre politique de confidentialité et à
          nos autres politiques applicables. Si vous n'acceptez pas ces
          conditions, veuillez ne pas utiliser l'application.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>2. Utilisation de l'Application</Text>
        <Text style={styles.paragraph}>
          Vous devez être âgé d'au moins 18 ans pour utiliser cette application.
          Vous êtes seul responsable de toute utilisation de l'application qui
          se produit en utilisant votre compte.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>3. Contenu de l'Utilisateur</Text>
        <Text style={styles.paragraph}>
          Les utilisateurs de l'application peuvent soumettre du contenu, y
          compris des annonces et des commentaires. Vous êtes seul responsable
          de tout contenu que vous soumettez, et vous acceptez de ne pas
          soumettre de contenu illégal ou offensant.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>4. Modifications des Conditions</Text>
        <Text style={styles.paragraph}>
          Nous nous réservons le droit de modifier ces conditions à tout moment.
          Les modifications prendront effet dès leur publication sur
          l'application. Il est de votre responsabilité de consulter
          régulièrement ces conditions pour vous assurer de leur conformité.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>5. Contact</Text>
        <Text style={styles.paragraph}>
          Si vous avez des questions ou des préoccupations concernant ces
          conditions, veuillez nous contacter à l'adresse suivante :
          contact@example.com.
        </Text>
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
  section: {
    marginBottom: 32, // Espacement supplémentaire entre les sections
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16, // Espacement sous le titre de section
    color: '#333',
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 16,
    color: '#666',
  },
});

export default TermsOfUseScreen;
