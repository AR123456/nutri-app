import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Switch } from "react-native";
import { colors } from "@/styles/global";
import {
  cancelMealReminders,
  requestPermissions,
  scheduleMealReminders,
} from "@/utils/notifications";
const REMINDERS_KEY = "remindersEnabled";

const ReminderToggle = () => {
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    const load = async () => {
      const val = await AsyncStorage.getItem(REMINDERS_KEY);
      setEnabled(val === "true");
    };
    load();
  }, []);
  return (
    <View>
      <Text>ReminderToggle</Text>
    </View>
  );
};

export default ReminderToggle;

const styles = StyleSheet.create({});
