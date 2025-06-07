const HomeScreen = () => {
  const { exerciseList } = useExerciseViewModel();
  console.log('exerciseList:', exerciseList);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={exerciseList || []}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ExerciseCard exercise={item} />}
      />
    </SafeAreaView>
  );
};
