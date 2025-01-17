import { useEffect } from "react";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";
import expoPushTokensApi from "../api/exportPushToken";

export default useNotifications = (notificationListener) => {
  useEffect(() => {
    registerForPushNotifications();

    if (notificationListener)
      Notifications.addNotificationReceivedListener(notificationListener);
  }, []);

  const registerForPushNotifications = async () => {
    try {
      const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      if (!permission.granted) return;

      const token = await Notifications.getExpoPushTokenAsync();
      console.log(token);
      expoPushTokensApi.register(token);
    } catch (error) {
      console.log("Error getting push token", error);
    }
  };
};
