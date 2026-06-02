import { globalStyles } from "@/styles/global";
import { Text, ScrollView } from "react-native";
import HomeHeader from "@/components/HomeHeader";
import MacroGrid from "@/components/MacroGrid";
export default function HomeScreen() {
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>My Macro Nutrient App</Text>
      <HomeHeader />
      <MacroGrid />
    </ScrollView>
  );
}
