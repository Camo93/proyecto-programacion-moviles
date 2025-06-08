import React, { useState } from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    SafeAreaView,
    Dimensions,
    Platform
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation, useRoute } from '@react-navigation/native';

const { width } = Dimensions.get('window');

export default function ProfileSetup() {
    const navigation = useNavigation();
    const route = useRoute();

    const { name, gender } = route.params || { name: 'Atleta', gender: '' };

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

        const freqNum = parseInt(frequency, 10);
        if (isNaN(freqNum) || freqNum < 1 || freqNum > 7) {
            alert('Ingresa una frecuencia válida (1-7 días por semana)');
            return;
        }

        navigation.navigate('MuscleSelection', {
            name,
            gender,
            weight: parseFloat(weight),
            height: parseFloat(height),
            goal,
            level,
            frequency: freqNum,
        });
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.contentWrapper}>
                <Text style={styles.title}>Perfil de Entrenamiento</Text>

                {/* Peso */}
                <View style={styles.pickerContainer}>
                    <Picker
                        selectedValue={weight}
                        onValueChange={setWeight}
                        style={styles.picker}
                        itemStyle={Platform.OS === 'ios' ? { height: 50 } : {}}
                    >
                        <Picker.Item label="Selecciona tu peso (kg)" value="" />
                        {Array.from({ length: 111 }, (_, i) => {
                            const peso = 40 + i; // 40 a 150 kg
                            return <Picker.Item key={peso} label={`${peso} kg`} value={`${peso}`} />;
                        })}
                    </Picker>
                </View>

                {/* Estatura */}
                <View style={styles.pickerContainer}>
                    <Picker
                        selectedValue={height}
                        onValueChange={setHeight}
                        style={styles.picker}
                        itemStyle={Platform.OS === 'ios' ? { height: 50 } : {}}
                    >
                        <Picker.Item label="Selecciona tu estatura (cm)" value="" />
                        {Array.from({ length: 71 }, (_, i) => {
                            const altura = 140 + i; // 140 a 210 cm
                            return <Picker.Item key={altura} label={`${altura} cm`} value={`${altura}`} />;
                        })}
                    </Picker>
                </View>

                {/* Objetivo */}
                <View style={styles.pickerContainer}>
                    <Picker
                        selectedValue={goal}
                        onValueChange={setGoal}
                        style={styles.picker}
                        itemStyle={Platform.OS === 'ios' ? { height: 50 } : {}}
                    >
                        <Picker.Item label="Selecciona tu objetivo" value="" />
                        <Picker.Item label="Perder peso" value="perder_peso" />
                        <Picker.Item label="Ganar músculo" value="ganar_musculo" />
                        <Picker.Item label="Mantener peso" value="mantener" />
                    </Picker>
                </View>

                {/* Nivel */}
                <View style={styles.pickerContainer}>
                    <Picker
                        selectedValue={level}
                        onValueChange={setLevel}
                        style={styles.picker}
                        itemStyle={Platform.OS === 'ios' ? { height: 50 } : {}}
                    >
                        <Picker.Item label="Selecciona tu nivel" value="" />
                        <Picker.Item label="Principiante" value="principiante" />
                        <Picker.Item label="Intermedio" value="intermedio" />
                        <Picker.Item label="Avanzado" value="avanzado" />
                    </Picker>
                </View>

                {/* Frecuencia */}
                <View style={styles.pickerContainer}>
                    <Picker
                        selectedValue={frequency}
                        onValueChange={setFrequency}
                        style={styles.picker}
                        itemStyle={Platform.OS === 'ios' ? { height: 50 } : {}}
                    >
                        <Picker.Item label="Frecuencia semanal (días)" value="" />
                        {Array.from({ length: 7 }, (_, i) => {
                            const dias = i + 1;
                            return <Picker.Item key={dias} label={`${dias} días/semana`} value={`${dias}`} />;
                        })}
                    </Picker>
                </View>

                <View style={styles.buttonWrapper}>
                    <Button title="Siguiente" onPress={handleNext} color="#1E90FF" />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    contentWrapper: {
        width: '90%',
        maxWidth: 400,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 24,
        textAlign: 'center',
        color: '#2c3e50',
        width: '100%',
    },
    pickerContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        borderColor: '#dcdcdc',
        borderWidth: 1,
        marginBottom: 16,
        width: '100%',
        overflow: 'hidden',
        justifyContent: 'center',
    },
    picker: {
        height: 50,
        width: '100%',
    },
    buttonWrapper: {
        width: '100%',
        marginTop: 10,
        borderRadius: 10,
        overflow: 'hidden',
    }
});

