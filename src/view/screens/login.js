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
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [emailConfirm, setEmailConfirm] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [gender, setGender] = useState('');
    const navigation = useNavigation();

    // Función para formatear fecha con barras automáticamente
    const handleBirthDateChange = (text) => {
        let cleaned = text.replace(/\D/g, '');
        if (cleaned.length > 8) cleaned = cleaned.slice(0, 8);

        let formatted = '';
        if (cleaned.length <= 2) {
            formatted = cleaned;
        } else if (cleaned.length <= 4) {
            formatted = cleaned.slice(0, 2) + '/' + cleaned.slice(2);
        } else {
            formatted = cleaned.slice(0, 2) + '/' + cleaned.slice(2, 4) + '/' + cleaned.slice(4);
        }
        setBirthDate(formatted);
    };

    const handleNext = () => {
        if (!name || !email || !emailConfirm || !birthDate || !gender) {
            alert('Por favor completa todos los campos');
            return;
        }

        // Validar formato DD/MM/AAAA con regex
        const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
        if (!dateRegex.test(birthDate)) {
            alert('Fecha debe tener formato DD/MM/AAAA');
            return;
        }

        // Validar fecha válida
        const [day, month, year] = birthDate.split('/').map(Number);
        const dateObj = new Date(year, month - 1, day);
        if (
            dateObj.getFullYear() !== year ||
            dateObj.getMonth() !== month - 1 ||
            dateObj.getDate() !== day
        ) {
            alert('Por favor ingresa una fecha válida');
            return;
        }

        // Validar formato básico de correo electrónico
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor ingresa un correo electrónico válido');
            return;
        }

        // Validar que correo y confirmación coincidan
        if (email !== emailConfirm) {
            alert('Los correos no coinciden');
            return;
        }
        navigation.navigate('ProfileSetup', { name, gender });
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Un placer conocerte, atleta</Text>
            <Text style={styles.subtitle}>
                Ayúdame con estas preguntas para ayudar a tu coach y crear un plan de entrenamiento.
            </Text>

            <TextInput
                style={styles.input}
                placeholder="Nombres"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Apellidos"
                value={lastname}
                onChangeText={setLastName}
            />
            <TextInput
                style={styles.input}
                placeholder="Correo personal"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Confirma tu correo"
                value={emailConfirm}
                onChangeText={setEmailConfirm}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="DD/MM/AAAA"
                value={birthDate}
                onChangeText={handleBirthDateChange}
                keyboardType="numeric"
                maxLength={10}
            />

            <View style={styles.input}>
                <Picker
                    selectedValue={gender}
                    onValueChange={(itemValue) => setGender(itemValue)}
                    style={{ height: 50 }}
                >
                    <Picker.Item label="Género" value="" />
                    <Picker.Item label="Masculino" value="masculino" />
                    <Picker.Item label="Femenino" value="femenino" />
                    <Picker.Item label="Prefiero no decirlo" value="no-decir" />
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
