import { View, Text, TouchableOpacity, FlatList, Button } from 'react-native';
import styles from '../../styles/styles.js';

export default function HomeScreen({navigation, tasks}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My ToDo</Text>
      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View style={styles.taskRow}>
            <TouchableOpacity style={styles.taskButton} onPress={() => null}>
              <Text style={{fontSize: 22}}>✔️</Text>
            </TouchableOpacity>
            <Text style={styles.displayTask}>{item.name}</Text>
          </View>
        )}
      />
      <TouchableOpacity
        style={styles.caracButton}
        onPress={() => navigation.navigate('AddTask')}>
          {/* appelle la navigation vers la page nommée AddTask*/}
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}
