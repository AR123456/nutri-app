import { Text, View, StyleSheet, Platform } from "react-native";
import * as Device from "expo-device";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>My Macro Nutrient App</Text>
      <Text>Running on: {Platform.OS}</Text>
      <Text>Device Model:{Device.modelName}</Text>
      <Text>Device Brand:{Device.brand}</Text>
      <Text>Device OS Version:{Device.osVersion}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
});
