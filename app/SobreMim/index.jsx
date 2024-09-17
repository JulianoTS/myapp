import {View, Text, Image, StyleSheet} from 'react-native';
import {Link} from 'expo-router'

export default function Page() {
    return(
        <View style={styles.body}>
            <View style={styles.header}>
                <Text style={styles.titulo}>Sobre Mim</Text>
            </View>
            <View style={styles.container1}>
            <Image
            style={styles.foto}
            source={require('./img/eu.jpg')}
            />
            <Text style={styles.subtitulo}>Bem-vindo(a) ao meu APP</Text>
            <Text style={styles.texto}>Eu curto muito ir para a praia, relaxar ao sol e sentir a brisa do mar. Quando estou com energia, gosto de jogar futebol, me divertir e ficar com a galera. E, para fechar o dia, adoro ver um bom filme e mergulhar em histórias legais. Veja meus filmes e praias favoritos abaixo!</Text>
            </View>
            <View style={styles.container2}>
            <View>
            <Link style={styles.botao} href='/Filmes'>Confira meus filmes favoitos!</Link>
            <Link style={styles.botao} href='/Praias'>Confira minhas praias favoritas!</Link>
            </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#f0f0f0', 
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '4%',
        height: 70,
        backgroundColor: '#007bff'
    },
    titulo: {
        fontSize: '200%',
        fontWeight: 'bold',
        color: 'white',
    },
    container1: {
        alignItems: 'center',
        marginBottom: '2%',
    },
    foto: {
        height: 200,
        width: 200,
        borderRadius: '100%',
        alignItems: 'center',
        marginBottom: '2%',
    },
    subtitulo: {
        fontSize: '150%',
        fontWeight: 'bold',
        marginBottom: '2%',
    },
    texto: {
        fontSize: '100%',
        width: 600,
    },
    container2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f0f0f0', 
    },
    botao: {
      backgroundColor: '#007bff', 
      color: '#fff',
      padding: 10, 
      borderRadius: 5,
      margin: 10,
    },
  });