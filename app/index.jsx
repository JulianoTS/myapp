import {View} from 'react-native';
import {Link} from 'expo-router'
import { StyleSheet } from 'react-native';

export default function Page() {
    return(
        <View style={styles.container}>
            <View>
            <Link style={styles.botao} href='/SobreMim'>Sobre Mim</Link>
            <Link style={styles.botao} href='/Banco'>Banco</Link>
            <Link style={styles.botao} href='/Cadastro'>Cadastro</Link>
            <Link style={styles.botao} href='/Calculadora'>Calculadora</Link>
            <Link style={styles.botao} href='/iFome'>iFome</Link>
            <Link style={styles.botao} href='/ListaTarefas'>Lista de tarefas</Link>
            <Link style={styles.botao} href='/Pokemon'>Pokemon</Link>
            <Link style={styles.botao} href='/SplashScreen'>Splash Screen</Link>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
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