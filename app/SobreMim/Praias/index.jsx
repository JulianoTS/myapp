import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';

export default function Praias() {
    return(
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <Text style={styles.titulo}>Praias</Text>
            </View>
            <View style={styles.section}>
                <Image
                style={styles.foto}
                source={require('../img/guarda.jpg')}
                />
                <Text style={styles.subtitulo}>Guarda do Embau</Text>
                <Text style={styles.texto}>A Praia Guarda do Embaú, em Palhoça, Santa Catarina, é conhecida por sua beleza natural, águas claras e boas ondas para surf. Cercada por morros e vegetação, oferece um ambiente tranquilo, com pousadas e restaurantes rústicos. É perfeita para relaxar, fazer trilhas e aproveitar a natureza, atraindo tanto famílias quanto surfistas.</Text>
            </View>
            <View style={styles.section}>
                <Image
                style={styles.foto}
                source={require('../img/palmas.jpg')}
                />
                <Text style={styles.subtitulo}>Palmas</Text>
                <Text style={styles.texto}>A Praia de Palmas, em Governador Celso Ramos, é famosa por suas águas cristalinas e areias finas. É um destino popular para famílias, oferecendo infraestrutura com quiosques e restaurantes. A praia é ideal para banhos de sol, esportes aquáticos e caminhadas. Além da beleza natural, Palmas é cercada por morros e vegetação, proporcionando um ambiente tranquilo e agradável. É um ótimo lugar para relaxar e aproveitar a natureza.</Text>
            </View>
            <View style={styles.section}>
                <Image
                style={styles.foto}
                source={require('../img/campeche.jpg')}
                />
                <Text style={styles.subtitulo}>Campeche</Text>
                <Text style={styles.texto}>A Praia do Campeche, em Florianópolis, é conhecida por sua extensa faixa de areia e ondas fortes, atraindo surfistas e amantes de esportes aquáticos. Com um ambiente vibrante, a praia é rodeada por bares e restaurantes, ideal para socializar e relaxar. Além da beleza natural, a região oferece trilhas e acesso à Ilha do Campeche, famosa por suas águas cristalinas e rica biodiversidade. É um destino popular tanto para turistas quanto para moradores locais.</Text>
            </View>
            <View style={styles.footer}>
                <Text>Para mais informações sobre as praias, clique na imagem da praia que deseja conhecer!</Text>   
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
        backgroundColor: '#007bff'
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