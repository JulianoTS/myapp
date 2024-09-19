import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';

export default function Filmes() {
    return(
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <Text style={styles.titulo}>Filmes</Text>
            </View>
            <View style={styles.section}>
                <Image
                style={styles.foto}
                source={require('../img/SenhorDosAnéis.jpg')}
                />
                <Text style={styles.subtitulo}>Senhor dos Anéis</Text>
                <Text style={styles.texto}>A saga "O Senhor dos Anéis", de J.R.R. Tolkien, é uma história de fantasia que se passa na Terra-média e acompanha Frodo Bolseiro em sua missão de destruir o Um Anel, criado pelo maligno Sauron. Com a ajuda de um grupo diversificado, ele enfrenta desafios e perigos em sua jornada até a Montanha da Perdição. A obra explora temas de amizade, coragem e a luta entre o bem e o mal, culminando em uma batalha épica pela liberdade da Terra-média.</Text>
            </View>
            <View style={styles.section}>
                <Image
                style={styles.foto}
                source={require('../img/hobbit.png')}
                />
                <Text style={styles.subtitulo}>Hobbit</Text>
                <Text style={styles.texto}>"O Hobbit", de J.R.R. Tolkien, é uma fantasia que segue a jornada de Bilbo Bolseiro, um hobbit que vive tranquilamente até ser recrutado pelo mago Gandalf e um grupo de anões liderados por Thorin Escudo de Carvalho. Eles partem em uma aventura para recuperar o reino dos anões e seu tesouro, guardado pelo dragão Smaug. Ao longo da jornada, Bilbo enfrenta desafios, faz novos amigos e descobre coragem e astúcia inesperadas. A história é rica em mitologia e apresenta temas de amizade, bravura e a busca por identidade.</Text>
            </View>
            <View style={styles.section}>
                <Image
                style={styles.foto}
                source={require('../img/panico.jpg')}
                />
                <Text style={styles.subtitulo}>Todo Mundo em Pânico 2</Text>
                <Text style={styles.texto}>"Todo Mundo em Pânico 2" é uma comédia de paródia que satiriza filmes de terror e suspense. A trama segue um grupo de estudantes que vão a uma mansão assombrada para participar de um concurso de redação. Logo, eles enfrentam uma série de situações absurdas e hilárias, incluindo monstros e assassinatos. O filme é conhecido por seu humor escrachado, referências a outros filmes e personagens exagerados, mantendo o tom cômico e satírico da franquia. É uma crítica divertida aos clichês dos filmes de terror.</Text>
            </View>
            <View style={styles.footer}>
                <Text>Para mais informações sobre os filmes, clique na imagem do filme que deseja conhecer!</Text>   
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f0f0f0',
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '4%',
        height: 70,
        backgroundColor: '#007bff',
    },
    titulo: {
        fontSize: '200%',
        fontWeight: 'bold',
        color: 'white',
    },
    section:{
      alignItems: "center",
      marginBottom: '4%',
    },
    foto: {
        width: 250,
        height: 250,
        borderRadius: "10%",
        marginBottom: '2%',
    },
    subtitulo: {
        fontSize: '150%',
        fontWeight: 'bold',
        marginBottom: '1%',
    },
    texto: {
        fontSize: '100%',
        width: 500,
    },
    footer: {
        backgroundColor: "#007bff",
        alignItems: "center",
        height: 40,
        justifyContent: "center",
    },
  });