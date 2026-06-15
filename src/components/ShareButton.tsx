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
    //
  };
  return (
    <TouchableOpacity>
      <Ionicons />
    </TouchableOpacity>
  );
};

export default ShareButton;
