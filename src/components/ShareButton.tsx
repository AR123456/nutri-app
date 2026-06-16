// Share API , use this button anywhere in app
import { Share, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Meal } from "@/storage/meals";
import { colors } from "@/styles/global";

type ShareButtonProps = {
  meals: Meal[];
};
const ShareButton = ({ meals }: ShareButtonProps) => {
  const handleShare = async () => {
    const totals = meals.reduce(
      (acc, meal) => ({
        //
      }),
      { calories: 0, protein: 0, carbs: 0, fat: 0 },
    );
    await Share.share({
      message: `Nutri-app Daily Summary\n\nCalories: ${totals.calories}\nProtine: ${totals.protein}g\nCarbs: ${totals.carbs}g\nFat: ${totals.fat}g\nMeals: ${meals.length} logged today`,
    });
  };
  return (
    <TouchableOpacity>
      <Ionicons />
    </TouchableOpacity>
  );
};

export default ShareButton;
