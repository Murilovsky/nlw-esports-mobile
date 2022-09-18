import { StatusBar } from 'react-native';
import Background from './src/components/background/index';
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_900Black } from '@expo-google-fonts/inter';
import { Routes } from './src/routes';
import { Loading } from './src/components/loading';
import './src/services/notificationConfig'
import { useEffect, useRef } from 'react';
import { getPushToken } from './src/services/pushNotificationToken';
import { Subscription } from 'expo-modules-core';
import * as Notification from 'expo-notifications'



export default function App() {

	const notificationListener = useRef<Subscription>()
	const notificationResponse = useRef<Subscription>()

	useEffect(() => {
		getPushToken()
	}, [])

	useEffect(() => {
		notificationListener.current = Notification.addNotificationReceivedListener(notification => console.log(notification))
		notificationResponse.current = Notification.addNotificationResponseReceivedListener(response => console.log(response))
		return () => {
			if (notificationListener.current && notificationResponse.current) {
				Notification.removeNotificationSubscription(notificationListener.current)
				Notification.removeNotificationSubscription(notificationResponse.current)

			}
		}
	}, [])


	const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_900Black })
	return (
		<Background>
			<StatusBar barStyle='light-content' backgroundColor="transparent"
				translucent />
			{fontsLoaded ? <Routes /> : <Loading />}
		</Background>
	);
}

