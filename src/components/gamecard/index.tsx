import React from 'react';
import { TouchableOpacity, ImageBackground, Text, ImageSourcePropType, TouchableOpacityProps } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './styles';
import { THEME } from '../../theme';

export interface GameCardProps {
    id: string,
    title: string,
    _count: { ads: number },
    bannerUrl: string
}
interface Props extends TouchableOpacityProps {
    data: GameCardProps
}

export function GameCard({ data, ...rest }: Props) {
    return (
        <TouchableOpacity style={styles.container}{...rest}>
            <ImageBackground style={styles.cover} source={{ uri: data.bannerUrl }}>

                <LinearGradient colors={THEME.COLORS.FOOTER} style={styles.footer}>
                    <Text style={styles.name}>{data.title}</Text>
                    <Text style={styles.ads}>{data._count.ads} {data._count.ads > 1 ? 'Anúncios' : 'Anúncio'}</Text>
                </LinearGradient>
            </ImageBackground>

        </TouchableOpacity>
    );
}