import {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../../styles/styles.js';

export default function AddTaskScreen({navigation, addTask}) {
  const [taskName, setTaskName] = useState('');

  const handleAddTask = () => {
    if (taskName.trim() !== ''){
      addTask(taskName);
      navigation.goBack();
    }
  };
  return (
    <View style={styles.addTaskContainer}>
      <TextInput
        style={[styles.input, {marginBottom: 100}]}
        placeholder='Name'
        placeholderTextColor='grey'
        value={taskName}
        onChangeText={setTaskName}
      />
      {/* placeHolder signifie le texte affiché dans la box d'input*/}
      {/* on rajoute en plus de styles.input le marginBottom pour avoir un écart entre les deux textInput*/}
      <TextInput style={styles.input} placeholder='Due Time' placeholderTextColor='grey'/>
      <TouchableOpacity style={styles.bottomButton} onPress={handleAddTask}>
        {/* le navigation.goBack() signifie qu'on retourne à la page précedente*/}
        <Text style={styles.buttonText}>Add task</Text>
      </TouchableOpacity>
    </View>
  );
}
