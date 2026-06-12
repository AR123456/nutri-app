import MealItem from "@/components/MealItem";
import { getMeals, Meal } from "@/storage/meals";
import { globalStyles } from "@/styles/global";
import { useFocusEffect, Link } from "expo-router";
import { useCallback, useState } from "react";
import { ScrollView, Text, View } from "react-native";

const MealsScreen = () => {
  const [meals, setMeals] = useState<Meal[]>([]);
  const loadMeals = async () => {
    const data = await getMeals();
    setMeals(data);
  };
  useFocusEffect(
    useCallback(() => {
      loadMeals();
    }, []),
  );
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>All Meals</Text>
      <View style={{ marginTop: 30 }}>
        {meals.length === 0 ? (
          <Text style={globalStyles.empty}>No meals logged yet</Text>
        ) : (
          meals.map((meal) => (
            <MealItem
              key={meal.id}
              id={meal.id}
              name={meal.name}
              calories={meal.calories}
              protein={meal.protein}
              carbs={meal.carbs}
              fat={meal.fat}
              onDelete={loadMeals}
            />
          ))
        )}
      </View>
      <Link href="/add-meal" style={{ fontSize: 18, color: "#007bff" }}>
        Add New Meal
      </Link>
    </ScrollView>
  );
};

export default MealsScreen;
