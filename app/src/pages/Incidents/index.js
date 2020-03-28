import React, {useState, useEffect} from 'react'
import Icon from 'react-native-vector-icons/Feather'
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native'
 import styles from './styles'

import logo from '../../assets/logo.png'
import next from '../../assets/next.svg'
import api from '../../services/api'

export default function Incidents() {
  const [incidents, setIncidents] = useState([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)

  const navigation = useNavigation()

  function navigateToDetail(incident){
    navigation.navigate('Detail', { incident })
  }

  async function loadIncidents () {
    if(loading){
      return 
    }

    if(total > 0 && incidents.length === total) {
      return 
    }

    setLoading(true)

    const response = await api.get('incidents', {
      params : {page}
    })
    
    setIncidents([...incidents, ...response.data])
    setTotal(response.headers['x-total-count'])
    setPage(page + 1)
    setLoading(false)

  }


  useEffect(() => {
    loadIncidents()
  }, [])

  return (
    <View style = {styles.container}>
      <View style = {styles.header}>
       <Image source = {logo} />
       <Text style = {styles.headerText}>
         Total de <Text style = {styles.headerTextBold}>{total} casos</Text>
       </Text>
      </View>

      <Text style = {styles.title}>Bem vindo</Text>
      <Text style = {styles.description}> Escolha um dos casos abaixo e salve o dia</Text>
      
      <FlatList
      style = {styles.incidentsList}
      data = {incidents}
      keyExtractor = {incident => String(incident.id)}
      showsVerticalScrollIndicator = {true}
      onEndReached = {loadIncidents}
      onEndReachedThreshold = {0.2}
      renderItem = {({item: incident}) => (
        <View style ={styles.incidents}>
          <Text style = {styles.incidentsProperty}>ONG:</Text>
          <Text style = {styles.incidentsValue}>{incident.name}</Text>

          <Text style = {styles.incidentsProperty}>CASO:</Text>
          <Text style = {styles.incidentsValue}>{incident.title}</Text>

          <Text style = {styles.incidentsProperty}>VALOR:</Text>
          <Text style = {styles.incidentsValue}>
            {Intl.NumberFormat('pt-BR', 
              {style : 'currency',
               currency: 'BRL'
              }).format(incident.value)}
          </Text>
          
          <TouchableOpacity
           style = {styles.detailsButton}
           onPress = {() => navigateToDetail(incident)}>
            <Text style = {styles.detailsButtonText}>Ver mais detalhes</Text>
          </TouchableOpacity>
        </View>
      )}
      />
      
     
    </View>
  )
}
