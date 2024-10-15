import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, FlatList, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';

const App = () => {
    const [memories, setMemories] = useState([]);
    const [memoryText, setMemoryText] = useState('');
    const [imageUri, setImageUri] = useState('');

    // Carrega memórias do AsyncStorage ao iniciar o app
    useEffect(() => {
        const loadMemories = async () => {
            const storedMemories = await AsyncStorage.getItem('memories');
            if (storedMemories) {
                setMemories(JSON.parse(storedMemories));
            }
        };
        loadMemories();
    }, []);

    // Adiciona uma nova memória
    const addMemory = async () => {
        const newMemory = { text: memoryText, image: imageUri };
        const updatedMemories = [...memories, newMemory];
        setMemories(updatedMemories);
        await AsyncStorage.setItem('memories', JSON.stringify(updatedMemories));
        setMemoryText('');
        setImageUri('');
    };

    // Seleciona uma imagem da galeria
    const selectImage = async () => {
        try {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                alert('Desculpe, precisamos de permissões para acessar sua galeria!');
                return;
            }

            const result = await ImagePicker.launchImageLibraryAsync();
            if (!result.cancelled) {
                setImageUri(result.uri);
            }
        } catch (error) {
            console.error('Erro ao selecionar imagem:', error);
            alert('Houve um erro ao selecionar a imagem.');
        }
    };

    // Remove uma memória
    const deleteMemory = async (index) => {
        const updatedMemories = memories.filter((_, i) => i !== index);
        setMemories(updatedMemories);
        await AsyncStorage.setItem('memories', JSON.stringify(updatedMemories));
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Descreva sua memória"
                value={memoryText}
                onChangeText={setMemoryText}
            />
            <Button title="Selecionar Imagem" onPress={selectImage} />
            <Button title="Adicionar Memória" onPress={addMemory} />
            <FlatList
                style={styles.memoryList}
                data={memories}
                renderItem={({ item, index }) => (
                    <View style={styles.memoryItem}>
                        <Text style={styles.memoryText}>{item.text}</Text>
                        {item.image && <Image source={{ uri: item.image }} style={styles.memoryImage} />}
                        <TouchableOpacity onPress={() => deleteMemory(index)} style={styles.deleteButton}>
                            <Text style={styles.deleteButtonText}>Excluir</Text>
                        </TouchableOpacity>
            </View>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
};

// Estilos do aplicativo
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f7f7f7',
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 15,
        fontSize: 16,
    },
    memoryList: {
        marginTop: 20,
    },
    memoryItem: {
        backgroundColor: 'white',
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 1,
        elevation: 2,
    },
    memoryImage: {
        width: '100%',
        height: 200,
        borderRadius: 5,
        marginTop: 10,
    },
    memoryText: {
        fontSize: 16,
        marginBottom: 5,
    },
    deleteButton: {
        backgroundColor: '#ff4d4d',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        alignItems: 'center',
    },
    deleteButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default App;
