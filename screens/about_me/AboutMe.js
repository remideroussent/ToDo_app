import styles from '../../styles/styles.js';
import {View, Text, Image} from 'react-native';

export default function AboutMe() {
    return (
        <View style={styles.aboutMeContainer}>
            <Text style={styles.aboutMeText}>
                Je m'appelle Rémi, je suis étudiant à Epitech en 2ème année. Les domaines dans lesquelles j'aimerai travailler sont la cybersécurité,
                l'IA ou le développement d'applications mobiles
            </Text>
            <Image source={require('../../assets/img/logo_epitech.png')} style={styles.imgEpitech} resizeMode="contain"/>
        </View>
    );
}
