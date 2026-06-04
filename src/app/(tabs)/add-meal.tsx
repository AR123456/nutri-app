import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { colors, globalStyles } from "@/styles/global";

const AddMealScreen = () => {
  // state management getters and setters
  const [name, setName] = useState("");
  const [calories, setCalories] = useState("");
  const [protein, setProtein] = useState("");
  const [carbs, setCarbs] = useState("");
  const [fat, setFat] = useState("");
  // on button press call handleAddMeal
  const handleAddMeal = () => {
    // state of the getters
    console.log({ name, calories, protein, carbs, fat });
  };
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Add Meal</Text>
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          placeholder="Meal name"
          placeholderTextColor={colors.textSecondary}
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Calories"
          placeholderTextColor={colors.textSecondary}
          value={calories}
          onChangeText={setCalories}
        />
        <TextInput
          style={styles.input}
          placeholder="Protein"
          placeholderTextColor={colors.textSecondary}
          value={protein}
          onChangeText={setProtein}
        />
        <TextInput
          style={styles.input}
          placeholder="Carbs"
          placeholderTextColor={colors.textSecondary}
          value={carbs}
          onChangeText={setCarbs}
        />
        <TextInput
          style={styles.input}
          placeholder="Carbs"
          placeholderTextColor={colors.textSecondary}
          value={carbs}
          onChangeText={setCarbs}
        />
        <TextInput
          style={styles.input}
          placeholder="Fat"
          placeholderTextColor={colors.textSecondary}
          value={fat}
          onChangeText={setFat}
        />
      </View>
    </View>
  );
};

export default AddMealScreen;

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.surface,
    color: colors.text,
    padding: 16,
    borderRadius: 10,
    fontSize: 16,
    marginTop: 16,
  },
  row: {
    flexDirection: "row",
    gap: 10,
  },
  rowInput: {
    flex: 1,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 24,
  },
  buttonText: {
    color: colors.background,
    fontSize: 16,
    fontWeight: "bold",
  },
});
