import { Text, View, StyleSheet, Platform } from "react-native";
// @ points to project root or src folder- configured in tsconfg.json
import { globalStyles } from "@/styles/global";

export default function HomeScreen() {
  const currentDate = new Date().toLocaleDateString();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Macro Nutrient App</Text>
      <Text style={styles.date}>{currentDate} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  date: {
    fontSize: 14,
    color: "#a0a0b0",
    marginTop: 4,
    marginBottom: 30,
  },
});
