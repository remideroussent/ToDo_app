import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/styles.js';

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My ToDo</Text>
      <Text style={styles.whiteText}>This is a ToDo application designed by R.Deroussent</Text>
      <TouchableOpacity
        style={styles.caracButton}
        onPress={() => navigation.navigate('AddTask')}>
          {/* appelle la navigation vers la page nommée AddTask*/}
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}
