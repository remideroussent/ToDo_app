import {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native'; // permet la navigation entre plusieurs écrans
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // permet de créer les différents écrans
import { GestureHandlerRootView } from 'react-native-gesture-handler'; // permet à l'application de gérer les gestes tactiles complexes (scroll, swipe, etc.)
import HomeScreen from './screens/home/HomeScreen'; // on importe le fichier de la page d'accueil
import AddTaskScreen from './screens/addTask/AddTaskScreen'; // on importe le fichier de la page où on ajoute des tâches
import AboutMe from './screens/about_me/AboutMe'; // on importe le fichier about me
import { useFonts } from 'expo-font'; // on importe les fonts pour les charger

const Stack = createNativeStackNavigator(); // création d'une stack qui permet de pouvoir naviguer entre les différents écrans

export default function App() { // default signifie que c'est la fonction principale appelée quand on appelle ce fichier
  const [fontsLoaded] = useFonts({
    Poppins: require('./assets/fonts/Poppins/Poppins-Black.ttf'), // on donne le lieu où est stocké la font que l'on souhaite charger
  })
  const [tasks, setTasks] = useState([]);

  if (!fontsLoaded){
    return null; // si on n'arrive pas à charger les fonts alors on ne fait juste rien et on aura la font système de base
  }
  const addTask = (taskName) => {
    setTasks([...tasks, {name: taskName, done: false}]);
  };
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        {/* gère la navigation générale (historique)*/}
        <Stack.Navigator screenOptions={{headerStyle: {backgroundColor: 'black'}, headerTintColor: '#5E5CE6', headerTitleStyle: {fontWeight: 'bold'},}}>
           {/* conteneur qui contient les écrans*/}
          <Stack.Screen name="Home" options={{headerShown: false}}>
            {props => <HomeScreen {...props} tasks={tasks} setTasks={setTasks}/>}
          </Stack.Screen>
          {/* écran d'accueil de l'application, 1er écran avec son nom et sa fonction approprié en composant*/}
          {/* headerShown masque le nom de la page, à faire seulement sur la page d'accueil sinon la flèche disparait aussi pour revenir en arrière*/}
          <Stack.Screen name="AddTask">
            {props => <AddTaskScreen {...props} addTask={addTask} />}
            {/* nous sommes obligés d'avoir cette syntaxe ici car on veut passer une prop personnalisé, ici addTask,*/}
            {/*  les props de base sont navigation et route qui sont contenues dans ...props */}
          </Stack.Screen>
          {/* 2ème écran, écran d'ajout de tâches avec son nom et sa fonction approprié en composant*/}
          <Stack.Screen name="About Me">
            {props => <AboutMe {...props} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
