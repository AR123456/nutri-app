import { Ionicons } from "@expo/vector-icons";
// getting clipboard from expo
import * as Clipboard from "expo-clipboard";
import * as Haptics from "expo-haptics";
import { Alert, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Meal } from "@/storage/meals";
import { colors } from "@/styles/global";

type CopyButtonProps = {
  meals: Meal[];
};
