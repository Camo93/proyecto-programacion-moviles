import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    SafeAreaView,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [gender, setGender] = useState('');
    const navigation = useNavigation(); // ← Aquí se inicializa
    const handleNext = () => {
        if (!name || !email || !birthDate || !gender) {
            alert('Por favor completa todos los campos');
            return;
    }

        debugger
        navigation.navigate('MuscleSelection', { name, gender });
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Un placer conocerte, atleta</Text>
            <Text style={styles.subtitle}>
                Ayúdame con estas preguntas para ayudar a tu coach y crear un plan de entrenamiento.
            </Text>

            <TextInput
                style={styles.input}
                placeholder="Nombre completo"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Correo personal"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                placeholder="DD/MM/AAAA"
                value={birthDate}
                onChangeText={setBirthDate}
                // keyboardType="numeric"  <-- mejor quita para que pueda ingresar '/'
            />

            <View style={styles.input}>
                <Picker
                    selectedValue={gender}
                    onValueChange={(itemValue) => setGender(itemValue)}
                    style={{ height: 50 }}
                >
                    <Picker.Item label="Selecciona tu género" value="" />
                    <Picker.Item label="Masculino" value="masculino" />
                    <Picker.Item label="Femenino" value="femenino" />
                    <Picker.Item label="Otro" value="otro" />
                </Picker>
            </View>

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
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
        color: '#2c3e50',
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center',
        color: '#7f8c8d',
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
});
