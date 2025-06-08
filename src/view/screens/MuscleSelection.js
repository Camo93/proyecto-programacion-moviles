import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';

export default function MuscleSelection({ navigation, route }) {
  const muscles = ['Tríceps', 'Bíceps', 'Pierna', 'Pecho', 'Espalda', 'Hombro'];

  // Agrupar de a 2 elementos por fila
  const rows = [];
  for (let i = 0; i < muscles.length; i += 2) {
    rows.push(muscles.slice(i, i + 2));
  }

  // const handleSelectMuscle = (muscle) => {
  //   alert(`Seleccionaste: ${muscle}`);
  // };
const handleSelectMuscle = (muscle) => {
    if (muscle === 'Tríceps') {
        navigation.navigate('Tricep', { nivel }); // <-- Aquí se navega
      } else {
        alert(`Aún no hay ejercicios para ${muscle}`);
      }
    };


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>¿Qué músculo deseas entrenar?</Text>

      {rows.map((row, index) => (
        <View key={index} style={styles.row}>
          {row.map((muscle) => (
            <TouchableOpacity
              key={muscle}
              style={styles.button}
              onPress={() => handleSelectMuscle(muscle)}
            >
              <Text style={styles.buttonText}>{muscle}</Text>
            </TouchableOpacity>
          ))}
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
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#1E90FF",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginHorizontal: 10,
    minWidth: 120,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

