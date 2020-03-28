import React from 'react'
import Icon from 'react-native-vector-icons/Feather'

import {useNavigation, useRoute} from '@react-navigation/native'
import { View, Image, TouchableOpacity, Text, Linking } from 'react-native';

 import styles from './styles';
import logo from '../../assets/logo.png'

export default function Detail() {
  const navigation = useNavigation()
  const route = useRoute()

  const incident = route.params.incident
  const message = `Olá ${incident.name} estou entrando em contato, pois gostaria de ajudar no caso ${incident.title} com o valor de ${
  Intl.NumberFormat(
   'pt-BR',
  { style : 'currency',
    currency: 'BRL'
  }).format(incident.value)}`
  
  function navigateBack(){
    navigation.goBack()
  }

  /*function sendMail(){
    MailComposer.composeAsync({
      subject : 'Heroi do caso Cadelinha Atropelada',
      recipients : ['maria.almoliveira@gmail.com'],
      body : message 
    })
  }*/

  function sendWhats(){
   Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}?text=${message}`)
  }

  return (
    <View style = {styles.container}>
     <View style = {styles.header}>
       <Image source = {logo} />
       <TouchableOpacity onPress = {navigateBack} style = {styles.headerText}>
         <Icon name = "arrow-left" size = {28} color = "#E02041"/>
       </TouchableOpacity>
      </View>
     <View style = {styles.incidents}>
     <Text style = {styles.incidentsProperty, {marginTop: 0}}>ONG:</Text>
     <Text style = {styles.incidentsValue}>{incident.name} de {incident.city}/{incident.uf}</Text>

          <Text style = {styles.incidentsProperty}>CASO:</Text>
          <Text style = {styles.incidentsValue}>{incident.title}</Text>

          <Text style = {styles.incidentsProperty}>VALOR:</Text>
          <Text style = {styles.incidentsValue}>
            {Intl.NumberFormat('pt-BR', 
              {style : 'currency',
               currency: 'BRL'
              }).format(incident.value)}>
          </Text>
     </View>

     <View style = {styles.contactBox}>
       <Text style = {styles.heroeTitle}>Salve o dia!</Text>
       <Text style = {styles.heroeTitle}>Seja um heroi desse caso</Text>
       
       <Text style = {styles.heroeDescription}>Entre em contato:</Text>
       <View style = {styles.actions}>
         <TouchableOpacity 
         onPress = {sendWhats}
         style = {styles.action}>
         <Text style = {styles.actionText}>Whatsapp</Text>
         </TouchableOpacity>

         <TouchableOpacity 
         onPress = {() => {}}
         style = {styles.action}>
         <Text style = {styles.actionText}>Email</Text>
         </TouchableOpacity>
       </View>
     </View>
    </View>
  )
}
