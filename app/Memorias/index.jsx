import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, View, TextInput, FlatList, Image, Text, TouchableOpacity, Alert} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';

const Stack = createStackNavigator();

const App = () => {
  const [memories, setMemories] = useState([]);
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);

  const loadMemories = async () => {
    try {
      const storedMemories = await AsyncStorage.getItem('memories');
      if (storedMemories) {
        setMemories(JSON.parse(storedMemories));
      }
    } catch (error) {
      console.error('Failed to load memories:', error);
    }
  };

  const saveMemories = async (newMemories) => {
    try {
      await AsyncStorage.setItem('memories', JSON.stringify(newMemories));
    } catch (error) {
      console.error('Failed to save memories:', error);
    }
  };

  const addMemory = () => {
    if (text && image) {
      const newMemory = { text, image };
      const updatedMemories = [...memories, newMemory];
      setMemories(updatedMemories);
      saveMemories(updatedMemories);
      setText('');
      setImage(null);
    } else {
      Alert.alert('Erro', 'Por favor, preencha o texto e selecione uma imagem.');
    }
  };

  const selectImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const takePhoto = async () => {
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const deleteMemory = (index) => {
    const updatedMemories = memories.filter((_, i) => i !== index);
    setMemories(updatedMemories);
    saveMemories(updatedMemories);
  };

  useEffect(() => {
    loadMemories();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.memoryFormContainer}>
        <Text style={styles.title}>Crie uma Memória</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua memória"
          value={text}
          onChangeText={setText}
        />
        {image && <Image source={{ uri: image }} style={styles.imagePreview} />}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={selectImage}>
            <Text style={styles.buttonText}>Selecionar Imagem</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={takePhoto}>
            <Text style={styles.buttonText}>Tirar Foto</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.addButton} onPress={addMemory}>
          <Text style={styles.addButtonText}>Adicionar Memória</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.memoryListContainer}>
        <Text style={styles.title}>Memórias</Text>
        <FlatList
          data={memories}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View style={styles.memoryItem}>
              <Image source={{ uri: item.image }} style={styles.memoryImage} />
              <View style={styles.memoryDetails}>
                <Text style={styles.memoryText}>{item.text}</Text>
                <TouchableOpacity
                  style={styles.deleteButton}
                  onPress={() => deleteMemory(index)}
                >
                  <Text style={styles.deleteButtonText}>Excluir</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  memoryFormContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    elevation: 2,
  },
  memoryListContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  imagePreview: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 5,
  },
  addButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  memoryItem: {
    flexDirection: 'row',
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 2,
  },
  memoryImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 15,
  },
  memoryDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  memoryText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  deleteButton: {
    backgroundColor: '#dc3545',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;