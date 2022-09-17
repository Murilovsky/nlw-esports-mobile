import React from 'react';
import { View, Image, FlatList } from 'react-native';

import { styles } from './styles';
import logo from '../../assets/logo-nlw-esports.png'
import { Heading } from '../../components/heading';
import { GameCard } from '../../components/gamecard';

import { GAMES } from '../../utils/games'


export function Home() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Heading title='Encontre seu duo' subtitle='Selecione o que deseja jogar...' />
      <FlatList style={styles.contentList}
      data={GAMES} 
      keyExtractor={item => item.id.toString()} 
      renderItem={({item})=>(<GameCard data={item} />)}
      horizontal
      showsHorizontalScrollIndicator={false}
      />

    </View>
  );
}