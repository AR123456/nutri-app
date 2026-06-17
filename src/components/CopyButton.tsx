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

const CopyButton = () => {
  return (
    <View>
      <Text>CopyButton</Text>
    </View>
  );
};

export default CopyButton;
