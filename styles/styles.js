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
    position: 'absolute', // absolute signifie que le texte est affiché sans prendre compte des autres éléments donc pourra être affiché par dessus 
    top: 75, // position de 75 pixels en partant du haut de l'écran
    fontWeight: 'bold',
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
    position: 'absolute',
    bottom: 70,
    alignSelf: 'center', // aligne l'instance, ici le bouton, au milieu sans tenir compte des règles données par le parent
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 7,
  },
});
