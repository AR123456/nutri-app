import { StyleSheet, Text, View } from "react-native";
import React from "react";
type MacroCardProps = {
  label: string;
  value: string;
  goal: string;
  color: string;
};
const MacroCard = ({ label, value, goal, color }: MacroCardProps) => {
  return (
    <View>
      <Text>MacroCard</Text>
    </View>
  );
};

export default MacroCard;

const styles = StyleSheet.create({});
