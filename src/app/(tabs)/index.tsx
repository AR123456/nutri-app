import HomeHeader from "@/components/HomeHeader";
import MacroGrid from "@/components/MacroGrid";
import RecentMeals from "@/components/RecentMeals";
import { getMeals, Meal } from "@/storage/meals";
import { globalStyles } from "@/styles/global";
import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { ScrollView, Text } from "react-native";
export default function HomeScreen() {
  const [meals, setMeals] = useState<Meal[]>([]);
  // use getMeals meal handler to get meals from local storage
  const loadMeals = async () => {
    const data = await getMeals();
    setMeals(data);
    console.log("Loaded meals", data);
  };
  //load the meals whenever the home screen comes into focus
  useFocusEffect(
    useCallback(() => {
      loadMeals();
    }, []),
  );
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>My Macro Nutrient App</Text>
      <HomeHeader />
      <MacroGrid />
      <RecentMeals />
    </ScrollView>
  );
}
