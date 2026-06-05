import AsyncStorage from "@react-native-async-storage/async-storage";
// define stuff for ts
export type Meal = {
  id: string;
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  createdAt: string;
};
// asyncstorage will store meals in array with meals key
const MEALS_KEY = "meals";
// get meals
export const getMeals = async (): Promise<Meal[]> => {
  const data = await AsyncStorage.getItem(MEALS_KEY);
  return data ? JSON.parse(data) : [];
};
// addmeal
export const addMeal = async (
  meal: Omit<Meal, "id" | "createdAt">,
): Promise<Meal> => {
  const meals = await getMeals();
  const newMeal: Meal = {
    ...meal,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
  };
  await AsyncStorage.setItem(MEALS_KEY, JSON.stringify([newMeal, ...meals]));
  return newMeal;
};
