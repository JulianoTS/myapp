import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Header = ({ header }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{header}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#007bff',
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15,
        height: 60,
    },
    text: {
        fontSize: '200%',
        fontWeight: 'bold',
        color: 'white',
    },
});

export default Header;