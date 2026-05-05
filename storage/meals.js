import AsyncStorage from "@react-native-async-storage/async-storage";

const MEALS_KEY = "meals";

export const getMeals = async () => {
  const res = await AsyncStorage.getItem(MEALS_KEY);
  const data = JSON.parse(res);

  if (data) {
    return data;
  } else {
    return [];
  }
};

export const addMeal = async (meal) => {
  const meals = await AsyncStorage.getItem(MEALS_KEY);
  const parsedMeals = !meals ? [] : JSON.parse(meals);

  const newMeal = {
    ...meal,
    id: Date.now().toString(),
    createdAt: Date.now().toString(),
  };

  await AsyncStorage.setItem(
    MEALS_KEY,
    JSON.stringify([newMeal, ...parsedMeals]),
  );
};

export const deleteMeal = async (id) => {
  const res = await AsyncStorage.getItem(MEALS_KEY);
  const meals = JSON.parse(res);

  const filtered = meals.filter((meal) => meal.id != id);

  await AsyncStorage.setItem(MEALS_KEY, JSON.stringify(filtered));
};
