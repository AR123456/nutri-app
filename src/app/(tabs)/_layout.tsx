import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

const TabLayout = () => {
  return (
    <View>
      <Tabs>
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color, size }) => <Ionicons />,
          }}
        >
          TabLayout
        </Tabs.Screen>
        <Tabs.Screen>TabLayout</Tabs.Screen>
        <Tabs.Screen>TabLayout</Tabs.Screen>
      </Tabs>
    </View>
  );
};

export default TabLayout;
