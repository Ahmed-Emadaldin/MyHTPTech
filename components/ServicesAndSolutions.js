import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ServicesAndSolutions() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Services and Solutions</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Service1')}>
                <Text style={styles.link}>Service 1</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Service2')}>
                <Text style={styles.link}>Service 2</Text>
            </TouchableOpacity>
            {/* Add more services as needed */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#005086',
    },
    link: {
        fontSize: 18,
        color: '#005086',
        marginBottom: 10,
    },
});