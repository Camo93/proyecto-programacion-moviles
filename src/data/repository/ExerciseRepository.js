import { exercises } from '../../utils/DummyData';

export const ExerciseRepository = {
  getAll: () => exercises,
  getById: (id) => exercises.find(ex => ex.id === id),
};
