import React, { useState } from 'react';
import { Modal, ModalProps, View, Text, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
import { CheckCircle } from 'phosphor-react-native';
import * as Clipboard from 'expo-clipboard'

import { styles } from './styles';
import { THEME } from '../../theme';
import { Heading } from '../heading';

interface Props extends ModalProps {
   discord: string,
   close: () => void
}

export function DuoMatch({ discord, close, ...rest }: Props) {
   const [isCopying, setCopy] = useState(false)

   async function DiscordToClipboard() {
      setCopy(true)
      await Clipboard.setStringAsync(discord)
      Alert.alert('Usuário do Discord copiado!!')
      setCopy(false)
   }

   return (
      <Modal animationType='fade' {...rest} transparent statusBarTranslucent>
         <View style={styles.container}>
            <View style={styles.content}>
               <TouchableOpacity style={styles.close} onPress={close}>
                  <MaterialIcons name='close' size={20} color={THEME.COLORS.CAPTION_500} />
               </TouchableOpacity>
               <CheckCircle size={64} color={THEME.COLORS.SUCCESS} />
               <Heading title="Let's play!" subtitle='Agora é só começar a jogar' />
               <Text style={styles.label}>Adicione ao discord:</Text>
               <TouchableOpacity style={styles.discordButton} onPress={DiscordToClipboard} disabled={isCopying}>
                  <Text style={styles.discord}>
                     {isCopying ? <ActivityIndicator color={THEME.COLORS.PRIMARY} /> : discord}
                  </Text>
               </TouchableOpacity>
            </View>
         </View>
      </Modal>

   );
}