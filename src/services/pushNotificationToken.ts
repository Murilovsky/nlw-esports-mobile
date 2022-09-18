import * as Notification from 'expo-notifications'

export async function getPushToken() {
   const { granted } = await Notification.getPermissionsAsync()
   if (!granted) {
      await Notification.getPermissionsAsync()
   }
   if (granted) {
      const pushToken = await Notification.getExpoPushTokenAsync()
      console.log('Token =>', pushToken.data)
      return pushToken.data
   }
}