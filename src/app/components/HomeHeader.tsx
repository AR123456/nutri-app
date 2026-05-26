import { StyleSheet, Text, View } from "react-native";
import React from "react";

const HomeHeader = () => {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
  return (
    <View>
      <Text>{currentDate}</Text>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({});
