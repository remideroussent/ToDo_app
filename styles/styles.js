import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: { // container est le nom du style mais on peut le nommer comme on veut
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addTaskContainer: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 100,
    paddingHorizontal: 80,
    justifyContent: 'flex-start',
  },
  title: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 60,
    marginBottom: 80,
  },
  whiteText: {
    color: 'white',
    width: '70%', // revient à la ligne quand 70% de l'écran est occupé
    textAlign: 'center',
  },
  caracButton: {
    backgroundColor: 'white',
    paddingVertical: 10, // taille du bouton en hauteur
    paddingHorizontal: 60, // taille du bouton en largeur
    borderRadius: 7, // rondeur des bordures du bouton
    position: 'absolute',
    bottom: 60,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold', // texte mis en gras, toujours mettre le texte des boutons en gras
    fontSize: 22,
  },
  input: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 60,
    borderRadius: 7,
    textAlign: 'center',
  },
  bottomButton: {
    position: 'absolute', // absolute signifie que peu importe si il y a autre chose au même endroit l'instance suivante se mettra à la place
    bottom: 70,
    alignSelf: 'center', // aligne l'instance, ici le bouton, au milieu sans tenir compte des règles données par le parent
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 7,
  },
  displayTask: {
    backgroundColor: 'white',
    borderRadius: 5,
    alignSelf: 'center',
    marginVertical: 10,
    padding: 20,
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    maxWidth: '70%',
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
  taskRow: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
