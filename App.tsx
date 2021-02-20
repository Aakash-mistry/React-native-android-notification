import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import PushNotification from 'react-native-push-notification';

const App: React.FC = () => {
  useEffect(() => {
    PushNotification.configure({
      onNotification: function (notification) {
        console.log('NOTIFICATION:', notification);
        if (notification.action === 'ReplyInput') {
          console.log('Hello');
        }
      },
      permissions: {
        alert: true,
        sound: true,
        badge: true,
      },
      popInitialNotification: true,
      requestPermissions: true,
    });

    PushNotification.createChannel(
      {
        channelId: 'channel-id', // (required)
        channelName: 'My channel', // (required)
      },
      (created) => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
    );
  });
  const handleNotification = () => {
    PushNotification.localNotification({
      channelId: 'channel-id',
      bigText: 'React native',
      message: 'Emergancy bradcasting notification service',
      onlyAlertOnce: true,
      vibration: 5000,
      invokeApp: true,
      largeIconUrl:
        'https://img.utdstc.com/icon/c35/e85/c35e858f4dc995c11a9730e599268649bfff12b92f075b49148389661ff5c938:200',
      largeIcon: 'ic_launcher',
      visibility: 'secret',
      actions: ['Replay', 'Cancel'],

      playSound: true,
    });
  };
  return (
    <View>
      <Text>React native notification</Text>
      <Button title="Press me" onPress={handleNotification} />
    </View>
  );
};
export default App;
