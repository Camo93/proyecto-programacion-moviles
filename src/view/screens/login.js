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
import { useNavigation } from '@react-navigation/native';

// Obtén el ancho de la pantalla para un centrado responsivo
const { width } = Dimensions.get('window');

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
            {/* Se añadió un View envolvente para el contenido principal para controlar su ancho */}
            <View style={styles.contentWrapper}>
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

                {/* Contenedor específico para el Picker para control de estilo */}
                <View style={styles.pickerInput}>
                    <Picker
                        selectedValue={gender}
                        onValueChange={(itemValue) => setGender(itemValue)}
                        // El estilo del Picker en Android es diferente, a menudo necesita un 'width: 100%'
                        style={{ height: 50, width: '100%' }}
                        itemStyle={Platform.OS === 'ios' ? { height: 50 } : {}} // Esto puede ayudar en iOS
                    >
                        <Picker.Item label="Género" value="" />
                        <Picker.Item label="Masculino" value="masculino" />
                        <Picker.Item label="Femenino" value="femenino" />
                        <Picker.Item label="Prefiero no decirlo" value="no-decir" />
                    </Picker>
                </View>

                {/* Usando un View para envolver el Button y controlar su estilo, ya que Button no acepta 'width' directamente en algunos casos */}
                <View style={styles.buttonWrapper}>
                    <Button title="Siguiente" onPress={handleNext} color="#1E90FF" /> {/* Usando un color fijo más visible */}
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
        alignItems: 'center',   // ¡Centra horizontalmente los hijos (el contentWrapper)!
        padding: 20, // Padding alrededor de todo el Safe Area
    },
    contentWrapper: {
        width: '90%', // O un valor fijo como 350
        maxWidth: 400, // Limita el ancho máximo en pantallas grandes
        alignItems: 'center', // Centra el texto y los inputs dentro de este wrapper
        // No es necesario 'justifyContent' aquí a menos que quieras distribuir el espacio
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center', // Asegura que el texto esté centrado dentro de su propio espacio
        color: '#2c3e50',
        width: '100%', // Asegura que el título ocupe todo el ancho del contentWrapper para el centrado de texto
    },
    subtitle: {
        fontSize: 14,
        marginBottom: 20, // Aumenté el margen inferior para más espacio
        textAlign: 'center', // Asegura que el texto esté centrado dentro de su propio espacio
        color: '#7f8c8d',
        width: '100%', // Asegura que el subtítulo ocupe todo el ancho del contentWrapper
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
    pickerInput: {
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 10,
        borderColor: '#dcdcdc',
        borderWidth: 1,
        marginBottom: 16,
        width: '100%', // El picker también debe ocupar el 100% del wrapper
        overflow: 'hidden', // Para asegurar que el borde redondeado se vea bien con el picker
        justifyContent: 'center', // Para centrar el contenido del picker verticalmente si es necesario
    },
    buttonWrapper: {
        width: '100%', // El wrapper del botón debe ocupar todo el ancho disponible para el botón
        marginTop: 10, // Un poco de espacio antes del botón
        borderRadius: 10, // Si quieres bordes redondeados en el botón también
        overflow: 'hidden', // Necesario para que borderRadius funcione en Android para el Button
    }
});