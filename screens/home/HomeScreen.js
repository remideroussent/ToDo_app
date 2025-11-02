import { View, Text, TouchableOpacity, FlatList, Button} from 'react-native';
import styles from '../../styles/styles.js';
import { useState } from 'react';
import { useAudioPlayer } from 'expo-audio';
import { Swipeable } from 'react-native-gesture-handler';

const audioSource = require("../../assets/audio/validation_audio.mp3"); // importe la source de l'audio que l'on veut utilisé

export default function HomeScreen({navigation, tasks, setTasks}) {
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
  let nb_done_tasks = tasks.filter(task => task.done).length; // .filter crée un nouveau tableau avec seulement les tâches qui sont dites comme done
  let nb_doing_tasks = tasks.length - nb_done_tasks;

  const renderRightActions = () => (
    <View style={styles.rightActionDeleteTask}>
      <TouchableOpacity onPress={() => console.log("delete")}>
        <Text>🗑️</Text>
      </TouchableOpacity>
    </View>
  );

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
              <Swipeable renderRightActions={renderRightActions}>
                {/* Swipeable sert à pouvoir swiper vers la droite ou la gauche et de faire une action comme delete une task */}
                <View style={styles.taskRow}>
                  <TouchableOpacity style={[styles.notDoneButton, item.done && styles.doneButton]} onPress={() => {
                    const alreadyPressed = pressedIndex.includes(index);
                    indexPressed(index);
                    if (!item.done){
                      player.play();
                      player.seekTo(0)
                    }
                    done_task_organisation(tasks, index, setTasks);
                  }}>
                    {item.done && <Text style={styles.doneIcon}>✓</Text>}
                    {/* ajout d'une flèche de validation quand la tâche est marquée comme terminée*/}
                  </TouchableOpacity>
                  <Text style={[styles.displayTask, item.done && styles.doneTask]}>{item.name}</Text>
                </View>
              </Swipeable>
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

function done_task_organisation(tasks, pressed_task_index, setTasks) {
  tasks[pressed_task_index].done = !tasks[pressed_task_index].done;

  // réordonner : en cours en haut, terminées en bas
  tasks.sort((a, b) => {
    if (a.done === b.done) return 0;
    return a.done ? 1 : -1;
  });

  setTasks([...tasks]); // met à jour le state global
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
