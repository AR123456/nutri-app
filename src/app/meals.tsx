import { globalStyles } from "@/styles/global";
import { Link } from "expo-router";
import { Text, ScrollView } from "react-native";

const MealsScreen = () => {
  <ScrollView style={globalStyles.container}>
    <Text style={globalStyles.title}>All Meals</Text>
    <Link href="/add-meal" style={{ fontSize: 18, color: "#007bff" }}>
      Add New Meal
    </Link>
  </ScrollView>;
};

export default MealsScreen;
