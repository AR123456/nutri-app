import * as Notifications from "expo-notifications";
//   notifications handler
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldShowBanner: true,
    shouldShowList: true,
    shouldShowSound: false,
    shouldShowBadge: false,
  }),
});
// request permissions

// schedule mel reminders

// cancel meal reminders
