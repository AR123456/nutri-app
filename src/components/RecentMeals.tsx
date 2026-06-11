import { Meal } from "@/storage/meals";
import { globalStyles } from "@/styles/global";
import { Text, View } from "react-native";
import MealItem from "./MealItem";
type RecentMealsProps = {
  meals: Meal[];
  onDelete: () => void;
};
const RecentMeals = ({ meals, onDelete }: RecentMealsProps) => {
  return (
    <View style={{ marginTop: 30 }}>
      <Text style={globalStyles.sectionTitle}>Recent Meals</Text>
      {meals.length === 0 ? (
        <Text style={globalStyles.empty}>No meals logged yet.</Text>
      ) : (
        meals
          // just first most recent meals
          .slice(0, 5)
          .map((meal) => (
            <MealItem
              // need key to show list
              key={meal.id}
              id={meal.id}
              name={meal.name}
              calories={meal.calories}
              protein={meal.protein}
              carbs={meal.carbs}
              fat={meal.fat}
              onDelete={onDelete}
            />
          ))
      )}
    </View>
  );
};

export default RecentMeals;
