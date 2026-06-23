import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Switch } from "react-native";
import { colors } from "@/styles/global";
import {
  cancelMealReminders,
  requestPermissions,
  scheduleMealReminders,
} from "@/utils/notifications";

const ReminderToggle = () => {
  // getter setter
  return (
    <View>
      <Text>ReminderToggle</Text>
    </View>
  );
};

export default ReminderToggle;

const styles = StyleSheet.create({});
