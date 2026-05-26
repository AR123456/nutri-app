import { Text, View, StyleSheet, Platform, ScrollView } from "react-native";
// @ points to project root or src folder- configured in tsconfg.json
import { globalStyles } from "@/styles/global";

export default function HomeScreen() {
  const currentDate = new Date().toLocaleDateString();
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>My Macro Nutrient App</Text>
      <Text style={styles.date}>{currentDate} </Text>
    </ScrollView>
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
