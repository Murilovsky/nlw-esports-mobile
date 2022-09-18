import React, { useEffect, useState } from 'react';
import { Image, FlatList } from 'react-native';

import { styles } from './styles';
import logo from '../../assets/logo-nlw-esports.png'
import { Heading } from '../../components/heading';
import { GameCard, GameCardProps } from '../../components/gamecard';
import { SafeAreaView } from 'react-native-safe-area-context';
import Background from '../../components/background';
import { useNavigation } from '@react-navigation/native';



export function Home() {

	const [games, setGames] = useState<Array<GameCardProps>>([])

	useEffect(() => {
		fetch('http://192.168.1.181:3000/games')
			.then(res => res.json())
			.then(data => setGames(data))
	}, [setGames])
	const navigation = useNavigation()

	function OpenGame({ id, title, bannerUrl }: GameCardProps) {
		navigation.navigate('game', { id, title, bannerUrl })
	}

	return (
		<Background>

			<SafeAreaView style={styles.container}>
				<Image source={logo} style={styles.logo} />
				<Heading title='Encontre seu duo' subtitle='Selecione o que deseja jogar...' />
				<FlatList style={styles.containerList}
					data={games}
					keyExtractor={item => item.id}
					renderItem={({ item }) => (<GameCard data={item} onPress={() => OpenGame(item)} />)}
					horizontal
					contentContainerStyle={styles.contentList}
					showsHorizontalScrollIndicator={false}
				/>

			</SafeAreaView>
		</Background>
	);
}