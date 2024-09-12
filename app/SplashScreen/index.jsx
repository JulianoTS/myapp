import { Image, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function App() {
  const logoBrawl = 'https://logos-world.net/wp-content/uploads/2021/08/Brawl-Stars-Emblem.png'
  return (
    <View style={styles.container}>
      <LinearGradient
        start={{ x: 1, y: 1 }}
        end={{ x: 1, y: 1 }}
        colors={['yellow', '#000000',]}
        style={styles.background}
      />
      <Image
        style={styles.logo}
        source={{
          uri : logoBrawl,
        }}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background:{
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  logo:{
    width: 120,
    height: 100,
  },
});

