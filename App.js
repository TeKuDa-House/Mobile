import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useNetInfo } from '@react-native-community/netinfo';
import Spinner from './components/Spinner';
import { Alert } from 'react-native';
import Routes from './routes/Routes';

function showWeakCellularAlert() {
  Alert.alert(
    'Connexion réseau faible',
    'Votre connexion cellulaire est faible. Veuillez vérifier votre signal et réessayer.',
    [
      {
        text: 'OK',
        onPress: () => {
          // Code à exécuter lorsque l'utilisateur appuie sur le bouton OK
          // Vous pouvez ajouter ici des actions spécifiques si nécessaire
        },
      },
      {
        text: 'Annuler',
        style: 'cancel',
        onPress: () => {
          // Code à exécuter lorsque l'utilisateur appuie sur le bouton Annuler
          // Vous pouvez ajouter ici des actions spécifiques si nécessaire
        },
      },
    ],
    { cancelable: false } // Empêche de fermer l'alerte en appuyant à l'extérieur
  );
}

export default function App() {
  const netInfo = useNetInfo();

  // if (!netInfo.isConnected) {
  //   return (
  //     <Spinner message="Vous n'êtes pas connecté à Internet. Veuillez vérifier votre connexion et réessayer." />
  //   );
  // }

  if (netInfo.type === 'cellular' && !netInfo.isInternetReachable) {
    showWeakCellularAlert();
  }

  return (
    <>
      <StatusBar style="auto" />
      <Routes />
    </>
  );
}
