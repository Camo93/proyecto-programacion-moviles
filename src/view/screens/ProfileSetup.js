import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    SafeAreaView,
    Dimensions, // Importa Dimensions para obtener el ancho de la pantalla
    Platform // Importa Platform para estilos específicos de iOS/Android
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation, useRoute } from '@react-navigation/native';

// Obtén el ancho de la pantalla para un centrado responsivo
const { width } = Dimensions.get('window');

export default function ProfileSetup() {
    const navigation = useNavigation();
    const route = useRoute();

    // Recibimos datos del login (asegúrate de que route.params tenga valores por defecto si no están presentes)
    const { name, gender } = route.params || { name: 'Atleta', gender: '' };

    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [goal, setGoal] = useState('');
    const [level, setLevel] = useState('');
    const [frequency, setFrequency] = useState('');

    const handleNext = () => {
        // Validación básica de campos vacíos
        if (!weight || !height || !goal || !level || !frequency) {
            alert('Por favor completa todos los campos');
            return;
        }

        // Validar que peso y estatura sean números y positivos
        const weightNum = parseFloat(weight);
        const heightNum = parseFloat(height);
        const freqNum = parseInt(frequency, 10);

        if (isNaN(weightNum) || weightNum <= 0) {
            alert('Ingresa un peso válido y positivo');
            return;
        }
        if (isNaN(heightNum) || heightNum <= 0) {
            alert('Ingresa una estatura válida y positiva');
            return;
        }
        // Validar que la frecuencia sea un número entre 1 y 7
        if (isNaN(freqNum) || freqNum < 1 || freqNum > 7) {
            alert('Ingresa una frecuencia válida (1-7 días por semana)');
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
            {/* Se añadió un View envolvente para el contenido principal para controlar su ancho */}
            <View style={styles.contentWrapper}>
                <Text style={styles.title}>Perfil de Entrenamiento</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Peso en kg"
                    value={weight}
                    onChangeText={setWeight}
                    keyboardType="numeric"
                    // Asegura que solo se ingresen números y un posible punto decimal
                    maxLength={5} // Ejemplo: 999.9
                />

                <TextInput
                    style={styles.input}
                    placeholder="Estatura en cm"
                    value={height}
                    onChangeText={setHeight}
                    keyboardType="numeric"
                    // Asegura que solo se ingresen números y un posible punto decimal
                    maxLength={5} // Ejemplo: 999.9
                />

                <View style={styles.pickerContainer}>
                    <Picker
                        selectedValue={goal}
                        onValueChange={setGoal}
                        style={styles.picker}
                        itemStyle={Platform.OS === 'ios' ? { height: 50 } : {}} // Estilo para iOS
                    >
                        <Picker.Item label="Selecciona tu objetivo" value="" />
                        <Picker.Item label="Perder peso" value="perder_peso" />
                        <Picker.Item label="Ganar músculo" value="ganar_musculo" />
                        <Picker.Item label="Mantener peso" value="mantener" />
                    </Picker>
                </View>

                <View style={styles.pickerContainer}>
                    <Picker
                        selectedValue={level}
                        onValueChange={setLevel}
                        style={styles.picker}
                        itemStyle={Platform.OS === 'ios' ? { height: 50 } : {}} // Estilo para iOS
                    >
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
                    maxLength={1} // Frecuencia de 1 a 7 días, un solo dígito
                />

                {/* Usando un View para envolver el Button y controlar su estilo */}
                <View style={styles.buttonWrapper}>
                    <Button title="Siguiente" onPress={handleNext} color="#1E90FF" /> {/* Color de botón */}
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        justifyContent: 'center', // Centra verticalmente los hijos
        alignItems: 'center',   // ¡Centra horizontalmente el contentWrapper!
        padding: 20, // Padding alrededor de todo el Safe Area
    },
    contentWrapper: {
        width: '90%', // O un valor fijo como 350
        maxWidth: 400, // Limita el ancho máximo en pantallas grandes
        // No es necesario 'alignItems' aquí si los hijos ya tienen 'width: 100%'
        // y el texto está con 'textAlign: center'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 24,
        textAlign: 'center', // Asegura que el texto esté centrado dentro de su propio espacio
        color: '#2c3e50',
        width: '100%', // Asegura que el título ocupe todo el ancho del contentWrapper para el centrado de texto
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
        width: '100%', // Esto es CRUCIAL: hace que los inputs ocupen todo el ancho del contentWrapper
    },
    pickerContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        borderColor: '#dcdcdc',
        borderWidth: 1,
        marginBottom: 16,
        width: '100%', // El picker también debe ocupar el 100% del wrapper
        overflow: 'hidden', // Para asegurar que el borde redondeado se vea bien con el picker
        justifyContent: 'center', // Para centrar el contenido del picker verticalmente si es necesario
    },
    picker: {
        height: 50,
        width: '100%', // Asegura que el Picker ocupe el 100% del pickerContainer
    },
    buttonWrapper: {
        width: '100%', // El wrapper del botón debe ocupar todo el ancho disponible para el botón
        marginTop: 10, // Un poco de espacio antes del botón
        borderRadius: 10, // Si quieres bordes redondeados en el botón también
        overflow: 'hidden', // Necesario para que borderRadius funcione en Android para el Button
    }
});
