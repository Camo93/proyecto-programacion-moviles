    import React from 'react';
    import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';

    export default function NivelSelection({ navigation }) {
    const niveles = ['Basico', 'Intermedio', 'Avanzado'];

    const handleSelectNivel = (nivel) => {
        navigation.navigate('Tricep', { nivel: nivel.toLowerCase() });

    };

    return (
        <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Selecciona tu nivel de experiencia</Text>
        {niveles.map((nivel) => (
            <TouchableOpacity
            key={nivel}
            style={styles.button}
            onPress={() => handleSelectNivel(nivel)}
            >
            <Text style={styles.buttonText}>{nivel}</Text>
            </TouchableOpacity>
        ))}
        </SafeAreaView>
    );
    }

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f2f2f2',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 24,
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#1E90FF',
        paddingVertical: 14,
        paddingHorizontal: 30,
        borderRadius: 8,
        marginVertical: 10,
        width: 200,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
    });
