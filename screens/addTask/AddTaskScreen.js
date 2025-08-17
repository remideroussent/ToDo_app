import {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../../styles/styles.js';

export default function AddTaskScreen({navigation, addTask}) {
  const [taskName, setTaskName] = useState('');
  const [message, setMessage] = useState('');

  const handleAddTask = () => {
    if (taskName.trim() !== ''){ // vérification si c'est une chaîne vide ou non
      addTask(taskName);
      navigation.goBack();
    } else {
      setMessage('Veuillez saisir tous les champs.');
    }
  };
  return (
    <View style={styles.addTaskContainer}>
      <TextInput
        style={styles.input}
        placeholder='Nom'
        placeholderTextColor='grey'
        keyboardAppearance='dark'
        value={taskName}
        onChangeText={setTaskName}
      />
      {/* placeHolder signifie le texte affiché dans la box d'input*/}
      {/* on rajoute en plus de styles.input le marginBottom pour avoir un écart entre les deux textInput*/}
      <TouchableOpacity style={styles.bottomButton} onPress={handleAddTask}>
        {/* le navigation.goBack() signifie qu'on retourne à la page précedente*/}
        <Text style={styles.buttonText}>Ajouter la tâche</Text>
      </TouchableOpacity>
      <Text style={{color: '#E57373', textAlign: 'center', marginTop: 15}}>{message}</Text>
    </View>
  );
}
