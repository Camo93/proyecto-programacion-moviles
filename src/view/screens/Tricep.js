
    import React from 'react';
    import { View, Text, Image, FlatList, SafeAreaView, StyleSheet } from 'react-native';
    import { ejerciciosTricep } from '../../LevelExercises/LevelTricep';

    export default function Tricep({ route }) {
    const { nivel } = route.params;
    const ejercicios = ejerciciosTricep[nivel] || ejerciciosTricep.basico;

    return (
        <SafeAreaView style={styles.container}>
        <FlatList
            data={ejercicios}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
            <View style={styles.card}>
                <Text style={styles.title}>{item.nombre}</Text>
                <Image source={item.imagen} style={styles.image} resizeMode="contain" />
                <Text style={styles.description}>{item.descripcion}</Text>
            </View>
            )}
        />
        </SafeAreaView>
    );
    }

    const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, backgroundColor: '#f9f9f9' },
    card: {
        marginBottom: 20,
        backgroundColor: '#fff',
        padding: 12,
        borderRadius: 8,
        elevation: 2,
    },
    title: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
    image: { width: '100%', height: 200, marginBottom: 8 },
    description: { fontSize: 14, color: '#555' },
    });
