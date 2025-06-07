import React from 'react';
import { View, FlatList, SafeAreaView } from 'react-native';
import { useExerciseViewModel } from '../../viewmodel/useExerciseViewModel';
import ExerciseCard from '../components/ExerciseCard';


const HomeScreen = () => {
const { exerciseList } = useExerciseViewModel();

return (
    <SafeAreaView>
    <FlatList
        data={exerciseList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ExerciseCard exercise={item} />}
    />
    </SafeAreaView>
);
};

export default HomeScreen;
