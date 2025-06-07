  import React from 'react';
  import { View, Text, Button, SafeAreaView, Alert, StyleSheet } from 'react-native';

  export default function MuscleSelection({ route }) {
  const { name, gender } = route.params || {};
  const muscles = ['Tríceps', 'Bíceps', 'Pierna', 'Pecho', 'Espalda', 'Hombro'];

  const handleSelectMuscle = (muscle) => {
  Alert.alert('Músculo seleccionado', `Seleccionaste: ${muscle}`);
  };

  return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>¿Qué músculo deseas entrenar?</Text>
        {muscles.map((muscle) => (
          <View key={muscle} style={styles.buttonContainer}>
            <Button title={muscle} onPress={() => handleSelectMuscle(muscle)} />
          </View>
        ))}
      </SafeAreaView>
    );
  }

  
  const styles = StyleSheet.create({
    container: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    title: {
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
    },
    buttonContainer: {
      marginVertical: 8,
    },
  });


