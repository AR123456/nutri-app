import * as Notifications from "expo-notifications";
//   notifications handler
Notifications.setNotificationHandler({
  //
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldShowBanner: true,
    shouldShowList: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});
// request permissions
export const requestPermissions = async (): Promise<boolean> => {
  const { status } = await Notifications.requestPermissionsAsync();
  // test
  console.log("Notification permission status:", status);

  return status === "granted";
};
// schedule mel reminders
export const scheduleMealReminders = async () => {
  // test
  console.log("scheduleMealReminders called");
  await Notifications.cancelAllScheduledNotificationsAsync();
  // test
  console.log("Existing notifications cleared");

  await Notifications.scheduleNotificationAsync({
    content: {
      title: "MacroZone",
      body: "Don't forget to log your lunch!",
    },
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.DAILY,
      hour: 12,
      minute: 0,
    },
  });

  console.log("Lunch reminder scheduled");
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "MacroZone",
      body: "Don't forget to log your dinner!",
    },
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.DAILY,
      hour: 18,
      minute: 0,
    },
  });
  console.log("Dinner reminder scheduled");
};

export const cancelMealReminders = async () => {
  await Notifications.cancelAllScheduledNotificationsAsync();
  console.log("All meal reminders cancelled");
};
