import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const FAQItem = ({ question, answer }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        onPress={toggleExpansion}
        style={styles.questionContainer}>
        <Text style={styles.questionText}>{question}</Text>
        <MaterialIcons
          name={expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
          size={24}
          color="#333"
        />
      </TouchableOpacity>
      {expanded && <Text style={styles.answerText}>{answer}</Text>}
    </View>
  );
};

const FaqScreen = () => {
  const [faqData, setFaqData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFAQData = async () => {
      // Données fictives de FAQ
      const fakeFAQData = [
        {
          id: 1,
          question: "Qu'est-ce que Lorem Ipsum ?",
          answer:
            "Lorem Ipsum est simplement un texte fictif de l'industrie de l'impression et de la composition.",
        },
        {
          id: 2,
          question: "D'où vient Lorem Ipsum ?",
          answer:
            'Lorem Ipsum est issu des sections 1.10.32 et 1.10.33 de "de Finibus Bonorum et Malorum" (Les Extremes des biens et des maux).',
        },
        {
          id: 3,
          question: "Pourquoi l'utiliser ?",
          answer:
            "C'est un texte fictif, utilisé par l'industrie de l'impression et de la composition pour l'aperçu.",
        },
        // Ajoutez d'autres questions et réponses fictives ici
      ];

      setFaqData(fakeFAQData);
      setIsLoading(false);
    };

    fetchFAQData();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {isLoading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text style={styles.loadingText}>Chargement des données...</Text>
        </View>
      ) : (
        faqData.map(({ id, question, answer }) => (
          <FAQItem key={id} question={question} answer={answer} />
        ))
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: '#666',
  },
  itemContainer: {
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  questionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  questionText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
  },
  answerText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
    paddingHorizontal: 16,
  },
});

export default FaqScreen;
