import MealItem from "@/components/MealItem";
import { getMeals, Meal } from "@/storage/meals";
import { globalStyles } from "@/styles/global";
import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { ScrollView, Text, View } from "react-native";

const MealsScreen = () => {
  const [meals, setMeals] = useState<Meal[]>([]);

  <ScrollView style={globalStyles.container}>
    <Text style={globalStyles.title}>All Meals</Text>
    <Link href="/add-meal" style={{ fontSize: 18, color: "#007bff" }}>
      Add New Meal
    </Link>
  </ScrollView>;
};

export default MealsScreen;
