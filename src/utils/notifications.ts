import * as Notifications from "expo-notifications";
//   notifications handler
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldShowBanner: true,
    shouldShowList: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});
// request permissions

// schedule mel reminders

// cancel meal reminders
