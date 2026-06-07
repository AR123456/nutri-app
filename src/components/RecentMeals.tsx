import { Meal } from "@/storage/meals";
import { globalStyles } from "@/styles/global";
import { Text, View } from "react-native";
import MealItem from "./MealItem";
type RecentMealsProps = {
  meals: Meal[];
};
const RecentMeals = ({ meals }: RecentMealsProps) => {
  return (
    <View style={{ marginTop: 30 }}>
      <Text style={globalStyles.sectionTitle}>Recent Meals</Text>
      if (meals.length===0){" "}
      {<Text style={globalStyles.empty}>No meals logged yet.</Text>}else
      {<MealItem name={meals.name} />}
      {/* <MealItem
        name="Chicken & Rice"
        calories={540}
        protein={45}
        carbs={50}
        fat={12}
      />
      <MealItem
        name="Protein Shake"
        calories={280}
        protein={30}
        carbs={20}
        fat={8}
      />
      <MealItem
        name="Salmon Salad"
        calories={430}
        protein={35}
        carbs={10}
        fat={25}
      /> */}
    </View>
  );
};

export default RecentMeals;
