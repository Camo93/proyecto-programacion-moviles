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
    container: { flex: 1, justifyContent: 'center', padding: 20 },
    title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
    buttonContainer: { marginVertical: 8 },
  });


// import React from 'react';
// import { View, Text, TouchableOpacity, SafeAreaView, Alert, StyleSheet, Image, ScrollView } from 'react-native';

// // Mapea cada músculo a una imagen local
const muscleImages = {
  // Tríceps: require('../../../assets/images/triceps.png'),
//   Bíceps: require('../../assets/images/biceps.png'),
//   Pierna: require('../../assets/images/pierna.png'),
//   Pecho: require('../../assets/images/pecho.png'),
//   Espalda: require('../../assets/images/espalda.png'),
//   Hombro: require('../../assets/images/hombro.png'),
};


// export default function MuscleSelection({ route }) {
//   const { name, gender } = route.params || {};
//   const muscles = Object.keys(muscleImages);

//   const handleSelectMuscle = (muscle) => {
//     Alert.alert('Músculo seleccionado', `Seleccionaste: ${muscle}`);
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.title}>¿Qué músculo deseas entrenar?</Text>
//       <ScrollView contentContainerStyle={styles.muscleList}>
//         {muscles.map((muscle) => (
//           <TouchableOpacity
//             key={muscle}
//             style={styles.muscleButton}
//             onPress={() => handleSelectMuscle(muscle)}
//           >
//             <Image source={muscleImages[muscle]} style={styles.muscleImage} />
//             <Text style={styles.muscleText}>{muscle}</Text>
//           </TouchableOpacity>
//         ))}
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 20, backgroundColor: '#fff' },
//   title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
//   muscleList: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-around',
//   },
//   muscleButton: {
//     alignItems: 'center',
//     marginVertical: 10,
//     width: '40%',
//     backgroundColor: '#f0f0f0',
//     borderRadius: 10,
//     padding: 15,
//     elevation: 2,
//   },
//   muscleImage: {
//     width: 80,
//     height: 80,
//     marginBottom: 10,
//     resizeMode: 'contain',
//   },
//   muscleText: {
//     fontSize: 16,
//     fontWeight: '600',
//   },
// });
