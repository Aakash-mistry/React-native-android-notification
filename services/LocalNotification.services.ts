import PushNotification from 'react-native-push-notification';
export const LocalNotification = () => {
  PushNotification.localNotification({
    autoCancel: false,
    bigText:
      'This is local notification demo in React Native app. Only shown, when expanded.',
    subText: 'Local Notification Demo',
    title: 'Local Notification Title',
    message: 'Expand me to see more',
    vibrate: true,
    vibration: 600,
    playSound: true,
  });
};
