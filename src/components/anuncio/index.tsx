import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { styles } from './styles';
import { DuoInfo } from '../duoinfo';
import { THEME } from '../../theme';
import { GameController } from 'phosphor-react-native'

export interface DuoCardProps {
   hourIn: string,
   hourOut: string,
   name: string,
   id: string,
   days: Array<string>,
   timePlaying: number,
   voice: boolean
}
interface Props {
   data: DuoCardProps,
   onConnect: () => void
}

export function DuoCard({ data, onConnect }: Props) {
   return (
      <View style={styles.container}>
         <DuoInfo label='Nome' value={data.name} />
         <DuoInfo label='Tempo de Jogo' value={`${data.timePlaying} anos`} />
         <DuoInfo label='Disponibilidade' value={`${data.days.length} dias \u2022 ${data.hourIn} - ${data.hourOut} `} />
         <DuoInfo label='Chamada de áudio' value={data.voice ? "Sim" : "Não"} colorValue={data.voice ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT} />

         <TouchableOpacity onPress={onConnect} style={styles.button}>
            <GameController color={THEME.COLORS.TEXT} size={20} />
            <Text style={styles.buttonTitle}>
               Conectar
            </Text>
         </TouchableOpacity>

      </View>
   );
}