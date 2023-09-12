import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Switch,
  TouchableOpacity,
} from 'react-native';

const PushNotificationsScreen = () => {
  const [pushNotificationsEnabled, setPushNotificationsEnabled] =
    useState(true);

  const togglePushNotifications = () => {
    // Ici, vous devrez implémenter la logique pour activer/désactiver les notifications push
    setPushNotificationsEnabled(!pushNotificationsEnabled);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Notifications Push</Text>

      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Activer les notifications push</Text>
        <Switch
          value={pushNotificationsEnabled}
          onValueChange={togglePushNotifications}
        />
      </View>

      <TouchableOpacity
        style={styles.clearNotificationsButton}
        onPress={() => {
          // Ici, vous pouvez implémenter la logique pour effacer les notifications
        }}>
        <Text style={styles.clearNotificationsText}>
          Effacer les notifications
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

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
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  settingLabel: {
    fontSize: 18,
    color: '#333',
  },
  clearNotificationsButton: {
    backgroundColor: 'red',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 32,
  },
  clearNotificationsText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default PushNotificationsScreen;
