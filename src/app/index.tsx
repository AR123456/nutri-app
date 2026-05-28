import { Link } from "expo-router";
import { Text, ScrollView } from "react-native";
// @ points to project root or src folder- configured in tsconfg.json
import { globalStyles } from "@/styles/global";
import HomeHeader from "@/components/HomeHeader";
export default function HomeScreen() {
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>My Macro Nutrient App</Text>
      <HomeHeader />
      <Link href="/meals" style={{ fontSize: 18, color: "#007bff" }}>
        Go to Meals
      </Link>
    </ScrollView>
  );
}
