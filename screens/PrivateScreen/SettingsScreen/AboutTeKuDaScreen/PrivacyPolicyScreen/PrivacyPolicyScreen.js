import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const PrivacyPolicyScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.subtitle}>
        Dernière mise à jour : [15 Septembre 2023]
      </Text>

      <Text style={styles.sectionTitle}>1. Collecte d'Informations</Text>
      <Text style={styles.paragraph}>
        Nous recueillons des informations lorsque vous utilisez notre
        application mobile. Les informations collectées peuvent inclure : - Les
        données personnelles telles que votre nom, votre adresse e-mail, votre
        numéro de téléphone, et votre adresse postale lorsque vous créez un
        compte. - Les informations sur les objets que vous publiez, vendez ou
        achetez, y compris les images, les descriptions, les prix, et les
        données de transaction. - Les informations de localisation lorsque vous
        utilisez les fonctionnalités basées sur la localisation de
        l'application, avec votre consentement. - Les informations sur votre
        appareil mobile, telles que le modèle, le système d'exploitation,
        l'identifiant unique de l'appareil, et l'adresse IP.
      </Text>

      <Text style={styles.sectionTitle}>2. Utilisation des Informations</Text>
      <Text style={styles.paragraph}>
        Nous utilisons les informations collectées pour les finalités suivantes
        : - Faciliter la création et la gestion de votre compte. - Faciliter les
        transactions, les paiements et les livraisons d'objets. - Personnaliser
        votre expérience en vous montrant des objets susceptibles de vous
        intéresser. - Répondre à vos questions, préoccupations ou demandes de
        support. - Améliorer nos services, la sécurité de l'application, et la
        prévention de la fraude. - Vous envoyer des mises à jour, des
        newsletters ou des offres promotionnelles, avec votre consentement.
      </Text>

      <Text style={styles.sectionTitle}>3. Partage d'Informations</Text>
      <Text style={styles.paragraph}>
        Nous ne partageons pas vos informations personnelles avec des tiers,
        sauf dans les cas suivants : - Avec votre consentement explicite. - Pour
        se conformer à des obligations légales, telles que les demandes des
        autorités gouvernementales. - Pour protéger nos droits, notre vie
        privée, notre sécurité ou nos biens. - En cas de fusion, acquisition ou
        vente d'actifs, où vos données peuvent être transférées à un tiers.
      </Text>

      <Text style={styles.sectionTitle}>4. Sécurité des Informations</Text>
      <Text style={styles.paragraph}>
        Nous mettons en œuvre des mesures de sécurité pour protéger vos
        informations personnelles contre tout accès non autorisé, toute
        divulgation, toute altération ou toute destruction. Cependant, aucune
        méthode de transmission sur Internet ou de stockage électronique n'est
        totalement sécurisée, et nous ne pouvons garantir la sécurité absolue de
        vos données.
      </Text>

      <Text style={styles.sectionTitle}>
        5. Cookies et Technologies Similaires
      </Text>
      <Text style={styles.paragraph}>
        Nous utilisons des cookies et des technologies similaires pour collecter
        des informations sur votre utilisation de l'application et pour
        améliorer votre expérience. Vous pouvez désactiver les cookies dans les
        paramètres de votre appareil.
      </Text>

      <Text style={styles.sectionTitle}>6. Vos Choix et Vos Droits</Text>
      <Text style={styles.paragraph}>
        Vous avez le droit de : - Accéder à vos informations personnelles et
        demander une copie. - Rectifier ou mettre à jour vos informations
        inexactes. - Supprimer vos informations personnelles, sous réserve de
        nos obligations légales. - Retirer votre consentement pour le traitement
        de vos données personnelles.
      </Text>

      <Text style={styles.sectionTitle}>7. Contactez-nous</Text>
      <Text style={styles.paragraph}>
        Si vous avez des questions ou des préoccupations concernant notre
        Politique de Confidentialité, veuillez nous contacter à [adresse e-mail
        de contact].
      </Text>

      <Text style={styles.paragraph}>
        Cette Politique de Confidentialité s'applique à l'application mobile
        [Nom de l'application]. En utilisant notre application, vous acceptez
        les termes de cette politique.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
  },
  paragraph: {
    fontSize: 16,
    color: '#333',
    marginBottom: 16,
  },
});

export default PrivacyPolicyScreen;
