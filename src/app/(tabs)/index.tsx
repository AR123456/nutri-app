import { globalStyles } from "@/styles/global";
import { Link } from "expo-router";
import { Text, ScrollView } from "react-native";
import HomeHeader from "../../components/HomeHeader";
export default function HomeScreen() {
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>My Macro Nutrient App</Text>
      <HomeHeader />
      <Link href="/add-meal" style={{ fontSize: 18, color: "#007bff" }}>
        This is add meal page
      </Link>
    </ScrollView>
  );
}
