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
