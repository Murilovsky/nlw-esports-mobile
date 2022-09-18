import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Background from '../../components/background';
import { GameParams } from '../../@types/navigation';
import { styles } from './styles';
import { Entypo } from '@expo/vector-icons'
import { TouchableOpacity, Image, View, FlatList, Text } from 'react-native';
import { THEME } from '../../theme';
import logoImg from '../../assets/logo-nlw-esports.png'
import { Heading } from '../../components/heading';
import { DuoCard, DuoCardProps } from '../../components/anuncio';

export function Game() {

    const route = useRoute()
    const game = route.params as GameParams

    const [ads, setAds] = useState<Array<DuoCardProps>>([])

    const navigation = useNavigation()

    useEffect(() => {
        fetch(`http://192.168.1.181:3000/games/${game.id}/ads`)
            .then(res => res.json())
            .then(data => setAds(data))

    }, [])

    function Back() {
        navigation.goBack()
    }

    return (
        <Background>
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={Back}>
                        <Entypo name='chevron-thin-left' color={THEME.COLORS.CAPTION_300} size={20} />
                    </TouchableOpacity>
                    <Image source={logoImg} style={styles.logo} />
                    <View style={styles.nulo} />
                </View>
                <Image source={{ uri: game.bannerUrl }} style={styles.cover} />
                <Heading title={game.title} subtitle='Conecte-se e comece a jogar' />
                <FlatList
                    data={ads}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <DuoCard onConnect={() => { }} data={item} />}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={styles.containerList}
                    contentContainerStyle={ads.length > 0 ? styles.contentList : styles.emptyContentList}
                    ListEmptyComponent={() => (<Text style={styles.emptyText}>Ainda não há anúncios para esse jogo 😢</Text>)} />
            </SafeAreaView>
        </Background>

    );
}