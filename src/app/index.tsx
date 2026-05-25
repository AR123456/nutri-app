import { Text, View, StyleSheet, Platform } from "react-native";
import * as Device from "expo-device";

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
  container: {
    flex: 1,
    backgroundColor: "#1a1a2e",
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ffffff",
  },
  date: {
    fontSize: 14,
    color: "#a0a0b0",
    marginTop: 4,
    marginBottom: 30,
  },
});
