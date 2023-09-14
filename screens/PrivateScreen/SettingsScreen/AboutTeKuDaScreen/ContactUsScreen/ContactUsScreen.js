import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Dimensions,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;

const ContactUsScreen = () => {
  const phoneNumber = '+22672000284'; // Replace with your phone number
  const emailAddress = 'adama1mg@gmail.com'; // Replace with your email address
  const websiteUrl = 'https://www.example.com'; // Replace with your website URL
  const facebookUrl = 'https://www.facebook.com/example'; // Replace with your Facebook URL
  const twitterUrl = 'https://twitter.com/example'; // Replace with your Twitter URL
  const instagramUrl = 'https://www.instagram.com/example'; // Replace with your Instagram URL

  const handlePhonePress = () => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  const handleEmailPress = () => {
    Linking.openURL(`mailto:${emailAddress}`);
  };

  const handleWebsitePress = () => {
    Linking.openURL(websiteUrl);
  };

  const handleFacebookPress = () => {
    Linking.openURL(facebookUrl);
  };

  const handleTwitterPress = () => {
    Linking.openURL(twitterUrl);
  };

  const handleInstagramPress = () => {
    Linking.openURL(instagramUrl);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Contact Us</Text>
      </View>
      <View style={styles.contactOptions}>
        <TouchableOpacity
          onPress={handlePhonePress}
          style={styles.contactOption}>
          <FontAwesome name="phone" size={windowWidth / 6} color="#007bff" />
          <Text style={styles.contactOptionText}>Call Us</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleEmailPress}
          style={styles.contactOption}>
          <FontAwesome name="envelope" size={windowWidth / 6} color="#007bff" />
          <Text style={styles.contactOptionText}>Send Email</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleWebsitePress}
          style={styles.contactOption}>
          <FontAwesome name="globe" size={windowWidth / 6} color="#007bff" />
          <Text style={styles.contactOptionText}>Visit Website</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.socialMedia}>
        <TouchableOpacity
          onPress={handleFacebookPress}
          style={styles.socialMediaLink}>
          <FontAwesome name="facebook" size={windowWidth / 4} color="#1877f2" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleTwitterPress}
          style={styles.socialMediaLink}>
          <FontAwesome name="twitter" size={windowWidth / 4} color="#1da1f2" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleInstagramPress}
          style={styles.socialMediaLink}>
          <FontAwesome
            name="instagram"
            size={windowWidth / 4}
            color="#e4405f"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  contactOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  contactOption: {
    flex: 1,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#007bff',
    paddingVertical: 20,
    borderRadius: 8,
  },
  contactOptionText: {
    marginTop: 10,
    fontSize: 16,
    color: '#007bff',
  },
  socialMedia: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  socialMediaLink: {
    marginHorizontal: 20,
  },
});

export default ContactUsScreen;
