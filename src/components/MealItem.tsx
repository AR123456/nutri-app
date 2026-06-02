import { StyleSheet, Text, View } from "react-native";
type MealItemProps = {
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
};

const MealItem = ({ name, calories, protein, carbs, fat }: MealItemProps) => {
  return (
    <View>
      <Text>MealItem</Text>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({});
