import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: { // container est le nom du style mais on peut le nommer comme on veut
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  addTaskContainer: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 100,
    paddingHorizontal: 80,
    justifyContent: 'flex-start',
  },
  aboutMeContainer: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  title: {
    flex: 1,
    color: '#5E5CE6',
    fontSize: 35,
    fontWeight: 'bold',
    marginLeft: 50,
    marginTop: 60,
    marginBottom: 50,
    textAlign: 'center',
  },
  whiteText: {
    color: 'white',
    width: '70%', // revient à la ligne quand 70% de l'écran est occupé
    textAlign: 'center',
  },
  caracButton: {
    backgroundColor: '#1A1A1A',
    paddingVertical: 10, // taille du bouton en hauteur
    paddingHorizontal: 60, // taille du bouton en largeur
    borderRadius: 8, // largeur des bordures du bouton
    position: 'absolute',
    bottom: 60,
    alignSelf: 'center',
  },
  notDoneButton: {
    borderWidth: 2,
    borderColor: '#ECECEC',
    backgroundColor: 'transparent',
    width: 30,
    height: 30,
    borderRadius: 20,
    marginLeft: 15,
  },
  doneButton: {
    borderWidth: 2,
    borderColor: '#ECECEC',
    backgroundColor: '#5E5CE6',
    width: 30,
    height: 30,
    borderRadius: 20,
    marginLeft: 15,
  },
  doneTask: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
  doneIcon: {
    color: 'white',
    fontSize: 16,
    lineHeight: 27,
    textAlign: 'center',
  },
  buttonText: {
    color: '#5E5CE6',
    fontSize: 20,
  },
  input: {
    backgroundColor: '#1A1A1A',
    paddingVertical: 10,
    paddingHorizontal: 60,
    borderRadius: 8,
    textAlign: 'center',
    color: '#ECECEC',
  },
  bottomButton: {
    position: 'absolute', // absolute signifie que peu importe si il y a autre chose au même endroit l'instance suivante se mettra à la place
    bottom: 60,
    alignSelf: 'center', // aligne l'instance, ici le bouton, au milieu sans tenir compte des règles données par le parent
    backgroundColor: '#1A1A1A',
    paddingVertical: 7,
    paddingHorizontal: 46,
    borderRadius: 8,
  },
  taskButton: {
    backgroundColor: '#eee',
    borderRadius: 25,
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  displayTask: {
    color: '#ECECEC',
    paddingVertical: 14,
    paddingHorizontal: 20,
    fontFamily: 'Poppins',
    fontSize: 15,
    textAlign: 'left',
    //marginRight: 25, // pour ensuite créer un bouton qui va servir de mettre en favori la tâche
    flex: 1,
  },
  taskRow: {
    backgroundColor: '#1A1A1A',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    borderRadius: 8,
    marginBottom: 2,
    marginHorizontal: 0,
  },
  noTask: {
    color: 'white',
    top: 180,
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Poppins',
    width: '90%', // revient à la ligne quand on occupe 90% de l'espace
    alignSelf: 'center',
  },
  aboutMeButton: {
    marginRight: 20,
    width: 35,
    height: 35,
    borderRadius: 17.5,
    borderWidth: 3,
    borderColor: '#5E5CE6',
    backgroundColor: 'transparent',
    top: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  aboutMeText: {
    fontFamily: 'Poppins',
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    top: 180,
    width: '92%',
    alignSelf: 'center',
  },
  imgEpitech: {
    width: 200,
    top: 200,
    alignSelf: 'center',
  },
});
