import { Ionicons } from "@expo/vector-icons";
// getting clipboard from expo
import * as Clipboard from "expo-clipboard";
import * as Haptics from "expo-haptics";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Meal } from "@/storage/meals";
import { colors } from "@/styles/global";

type CopyButtonProps = {
  meals: Meal[];
};

const CopyButton = ({ meals }: CopyButtonProps) => {
  // handle copy
  const handleCopy = async () => {
    const totals = meals.reduce(
      (acc, meal) => ({
        calories: acc.calories + meal.calories,
        protein: acc.protein + meal.protein,
        carbs: acc.carbs + meal.carbs,
        fat: acc.fat + meal.fat,
      }),
      { calories: 0, protein: 0, carbs: 0, fat: 0 },
    );
  };
  // summary to return
  const summary = ``;
  return (
    <View>
      <Text>CopyButton</Text>
    </View>
  );
};

export default CopyButton;
const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginTop: 16,
  },
  text: {
    color: colors.primary,
    fontSize: 14,
  },
});
