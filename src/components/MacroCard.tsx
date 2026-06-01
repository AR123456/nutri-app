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
    <View style={[styles.card, { borderLeftColor: color }]}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.goal}>/ {goal}</Text>
    </View>
  );
};

export default MacroCard;

const styles = StyleSheet.create({});
