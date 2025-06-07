    import React, { useState } from 'react';
    import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    SafeAreaView,
    Picker,
    } from 'react-native';
    import { useNavigation, useRoute } from '@react-navigation/native';

    export default function ProfileSetup() {
    const navigation = useNavigation();
    const route = useRoute();

    // Recibimos datos del login
    const { name, gender } = route.params;

    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [goal, setGoal] = useState('');
    const [level, setLevel] = useState('');
    const [frequency, setFrequency] = useState('');

    const handleNext = () => {
        if (!weight || !height || !goal || !level || !frequency) {
        alert('Por favor completa todos los campos');
        return;
        }

        // Validar que peso y estatura sean números y positivos
        const weightNum = parseFloat(weight);
        const heightNum = parseFloat(height);
        const freqNum = parseInt(frequency, 10);

        if (isNaN(weightNum) || weightNum <= 0) {
        alert('Ingresa un peso válido');
        return;
        }
        if (isNaN(heightNum) || heightNum <= 0) {
        alert('Ingresa una estatura válida');
        return;
        }
        if (isNaN(freqNum) || freqNum <= 0 || freqNum > 7) {
        alert('Ingresa una frecuencia válida (1-7 días)');
        return;
        }

        // Navegar a MuscleSelection con todos los datos
        navigation.navigate('MuscleSelection', {
        name,
        gender,
        weight: weightNum,
        height: heightNum,
        goal,
        level,
        frequency: freqNum,
        });
    };

    return (
        <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Perfil de Entrenamiento</Text>

        <TextInput
            style={styles.input}
            placeholder="Peso en kg"
            value={weight}
            onChangeText={setWeight}
            keyboardType="numeric"
        />

        <TextInput
            style={styles.input}
            placeholder="Estatura en cm"
            value={height}
            onChangeText={setHeight}
            keyboardType="numeric"
        />

        <View style={styles.pickerContainer}>
            <Picker selectedValue={goal} onValueChange={setGoal} style={styles.picker}>
            <Picker.Item label="Selecciona tu objetivo" value="" />
            <Picker.Item label="Perder peso" value="perder_peso" />
            <Picker.Item label="Ganar músculo" value="ganar_musculo" />
            <Picker.Item label="Mantener peso" value="mantener" />
            </Picker>
        </View>

        <View style={styles.pickerContainer}>
            <Picker selectedValue={level} onValueChange={setLevel} style={styles.picker}>
            <Picker.Item label="Selecciona tu nivel" value="" />
            <Picker.Item label="Principiante" value="principiante" />
            <Picker.Item label="Intermedio" value="intermedio" />
            <Picker.Item label="Avanzado" value="avanzado" />
            </Picker>
        </View>

        <TextInput
            style={styles.input}
            placeholder="Frecuencia semanal (días)"
            value={frequency}
            onChangeText={setFrequency}
            keyboardType="numeric"
            maxLength={1}
        />

        <Button title="Siguiente" onPress={handleNext} />
        </SafeAreaView>
    );
    }

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 24,
        textAlign: 'center',
        color: '#2c3e50',
    },
    input: {
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 16,
        fontSize: 16,
        borderColor: '#dcdcdc',
        borderWidth: 1,
    },
    pickerContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        borderColor: '#dcdcdc',
        borderWidth: 1,
        marginBottom: 16,
    },
    picker: {
        height: 50,
    },
    });
