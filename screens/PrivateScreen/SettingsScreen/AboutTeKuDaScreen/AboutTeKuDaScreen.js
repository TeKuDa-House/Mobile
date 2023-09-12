import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Utilisez la bibliothèque d'icônes appropriée

const AboutTeKuDaScreen = ({ navigation }) => {
  const appVersion = '1.0.1'; // Remplacez par la version réelle de votre application
  const appName = 'TeKuDa';
  const appAuthor = 'Adama NIADA';
  const appLicense = 'Licence propriétaire';
  const licenseUrl = 'https://opensource.org/license/wxwindows-php/'; // Remplacez par le lien de votre licence

  const handleShare = async () => {
    try {
      const result = await Share.share({
        message: `Découvrez ${appName} - une application mobile de vente d'objets d'occasion en ligne. Version ${appVersion}. Par ${appAuthor}.`,
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // L'utilisateur a partagé l'application
          console.log("L'application partagée avec succès");
        } else {
          // L'utilisateur a annulé le partage
          console.log('Partage annulé');
        }
      } else if (result.action === Share.dismissedAction) {
        // L'utilisateur a fermé la boîte de partage
        console.log('Partage fermé');
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleRateApp = () => {
    navigation.navigate('RateApp');
  };

  const handleContactUs = () => {
    navigation.navigate('ContactezNous');
  };

  const handlePrivacyPolicy = () => {
    navigation.navigate('PolitiqueDeConfidentialite');
  };

  const handleOpenWebsite = () => {
    // Vous pouvez implémenter ici la logique pour rediriger l'utilisateur vers le site Web de votre application.
    // Assurez-vous d'ajuster cette logique en fonction des besoins de votre application.
    Linking.openURL('https://www.votre-site-web.com');
  };

  const handleOpenLicense = () => {
    // Ouvrir le lien de la licence dans le navigateur
    Linking.openURL(licenseUrl);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>À propos de {appName}</Text>
      <Text style={styles.version}>Version : {appVersion}</Text>
      <Text style={styles.author}>Auteur : {appAuthor}</Text>
      <Text>
        <Text style={styles.license}>Licence : </Text>
        <Text style={styles.licenseLink} onPress={handleOpenLicense}>
          {appLicense}
        </Text>
      </Text>
      <Text style={styles.description}>
        TeKuDa est une application mobile de vente d'objets d'occasion en ligne.
        Nous offrons une plateforme conviviale pour acheter et vendre une grande
        variété d'articles d'occasion.
      </Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={handleShare}>
          <FontAwesome name="share" size={24} color="white" />
          <Text style={styles.buttonText}>Partager</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleRateApp}>
          <FontAwesome name="star" size={24} color="white" />
          <Text style={styles.buttonText}>Noter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleContactUs}>
          <FontAwesome name="envelope" size={24} color="white" />
          <Text style={styles.buttonText}>Nous contacter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handlePrivacyPolicy}>
          <FontAwesome name="lock" size={24} color="white" />
          <Text style={styles.buttonText}>Politique de confidentialité</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleOpenWebsite}>
          <FontAwesome name="globe" size={24} color="white" />
          <Text style={styles.buttonText}>Visitez le site Web</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  version: {
    fontSize: 16,
    marginBottom: 8,
  },
  author: {
    fontSize: 16,
    marginBottom: 8,
  },
  license: {
    fontSize: 16,
  },
  licenseLink: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
    marginLeft: 5,
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
  },
  buttonsContainer: {
    marginTop: 20,
    flexDirection: 'column', // Alignement vertical
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007bff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default AboutTeKuDaScreen;
