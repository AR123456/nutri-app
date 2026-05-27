import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalStyles } from "@/styles/global";

const HomeHeader = () => {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
  return (
    <View style={globalStyles.header}>
      <Text style={styles.date}>{currentDate}</Text>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({});
