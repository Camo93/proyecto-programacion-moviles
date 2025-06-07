import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ExerciseCard = ({ exercise }) => (
  <View style={styles.card}>
    <Image source={{ uri: exercise.imageUrl }} style={styles.image} />
    <Text style={styles.title}>{exercise.name}</Text>
    <Text>{exercise.muscleGroup}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: { padding: 10, margin: 10, backgroundColor: '#eee', borderRadius: 10 },
  image: { width: '100%', height: 150 },
  title: { fontWeight: 'bold', fontSize: 16 }
});

export default ExerciseCard;

