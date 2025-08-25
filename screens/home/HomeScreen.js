import { View, Text, TouchableOpacity, FlatList, Button } from 'react-native';
import styles from '../../styles/styles.js';
import { useState } from 'react';
import { useAudioPlayer } from 'expo-audio';

const audioSource = require("../../assets/audio/validation_audio.mp3"); // importe la source de l'audio que l'on veut utilisé

export default function HomeScreen({navigation, tasks}) {
  const [pressedIndex, setPressedIndex] = useState([]);

  const player = useAudioPlayer(audioSource); // utilise l'audio dans la variable player

  const indexPressed = (index) => {
    setPressedIndex(prev => { // prev représente l'ancien tableau avant le clique du boutton
      const alreadyPressed = prev.includes(index); // prev.includes(index) renvoie true si le boutton est déjà pressé 
      if (alreadyPressed) {
        return prev.filter(i => i !== index); // renvoie un nouveau tableau avec tous les éléments différents d'index
      } else {
        return [...prev, index]; // sinon on rajoute l'index à la fin de l'ancien tableau prev, ...prev concatène prev et index
      }
    });
  };
  let nb_done_tasks = pressedIndex.length;
  let nb_doing_tasks = tasks.length - pressedIndex.length;

  return (
    <View style={styles.container}>
      <About_me_button_title navigation={navigation}/>
      {/* on utilise un ternaire pour afficher un bout de texte quand nous n'avons pas de tâches et afficher les tâches sinon*/}
      <View style={{flex: 1, paddingBottom: 145}}>
        {/* on met la flatlist dans une view pour pouvoir lui appliquer un style et que les tâches ne débordent pas sur le bouton*/}
        {tasks.length === 0 ? (
          <Text style={styles.noTask}>Vous n'avez actuellement aucune tâche en cours.  Au boulot !📝</Text>
        ) : (
          <FlatList
            data={tasks}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => (
              <View style={styles.taskRow}>
                <TouchableOpacity style={[styles.notDoneButton, pressedIndex.includes(index) && styles.doneButton]} onPress={() => {
                  const alreadyPressed = pressedIndex.includes(index);
                  indexPressed(index);
                  if (!alreadyPressed){
                    player.play();
                    player.seekTo(0)
                  }
                }}>
                  {pressedIndex.includes(index) && <Text style={styles.doneIcon}>✓</Text>}
                  {/* ajout d'une flèche de validation quand la tâche est marquée comme terminée*/}
                </TouchableOpacity>
                <Text style={[styles.displayTask, pressedIndex.includes(index) && styles.doneTask]}>{item.name}</Text>
              </View>
            )}
          />
        )}
        <Display_nb_tasks nb_done_tasks={nb_done_tasks} nb_doing_tasks={nb_doing_tasks} tasks={tasks}/>
        {/* ici on appelle la fonction Display_nb_tasks*/}
      </View>
      <Button_add_tasks navigation={navigation}/>
      {/* ici on appelle la fonction Button_add_tasks*/}
    </View>
  );
}

function About_me_button_title({navigation}) {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
      <Text style={styles.title}>Tâches</Text>
      <TouchableOpacity style={styles.aboutMeButton} onPress={() => navigation.navigate('About Me')}>
        <Text style={{color: '#5E5CE6', fontWeight: 'bold', fontSize: 18}}>i</Text>
      </TouchableOpacity>
    </View>
  )
}

function Display_nb_tasks({nb_done_tasks, nb_doing_tasks, tasks}) {
  if (tasks.length === 0)
    return null;

  return (
      <View style={{marginTop: 15}}>
        {nb_doing_tasks <= 1 ? (
          <Text style={{color: 'white', textAlign: 'center'}}>Vous avez {nb_doing_tasks} tâche encore en cours</Text>
        ) : (
          <Text style={{color: 'white', textAlign: 'center'}}>Vous avez {nb_doing_tasks} tâches encore en cours</Text>
        )}
        {(nb_done_tasks === 1 || nb_done_tasks === 0) ? (
          <Text style={{color: 'white', textAlign: 'center', marginTop: 10}}>Vous avez fini {nb_done_tasks} tâche</Text>
        ) : (
          <Text style={{color: 'white', textAlign: 'center', marginTop: 10}}>Vous avez fini {nb_done_tasks} tâches</Text>
        )}
      </View>
  );
}

function Button_add_tasks({navigation}) {
  return (
    <View>
      <TouchableOpacity
        style={styles.caracButton}
        onPress={() => navigation.navigate('AddTask')}>
          {/* appelle la navigation vers la page nommée AddTask*/}
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={[styles.buttonText, {fontSize: 40, lineHeight: 40}]}>+  </Text>
          <Text style={styles.buttonText}> Ajoutez une tâche</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
