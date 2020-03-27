import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import api from '../services/api'
 import { 
  Container,
  Header,
  Span,
  Linkto,
  ButtonOut,
  ButtonDelete,
  Ul,
  Li,
  Strong,
  P,
  Title
 } from './styles'

import logo from '../../assets/logo.svg'
import {FiPower, FiTrash2} from 'react-icons/fi'

export default function Profile() {
  const [incidents, setIncidents] = useState([])
  
  const history = useHistory()
  const ongId = localStorage.getItem('ongId')
  const ongName = localStorage.getItem('ongName')
  
  useEffect(() => {
    api.get('/profile', {
      headers: {
        Authorization: ongId
      }
    }).then(response => {
      setIncidents(response.data)
    })
  }, [ongId])
  //array: qual função
  //chaves: o que ela vai fazer e quando
  //parêntese: representa a função
  
  async function handleDelete(id) {
    try{
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongId
        }
      })
     setIncidents(incidents.filter(incidents => incidents.id !== id))
    }
    catch(err){
     alert('Erro ao deletar caso, tente novamente')
    }
  }

  function handleLogout(){
    localStorage.clear()
    history.push('/')
  }

  return (
    <Container>
      <Header>
       <img src={logo} alt = "Hero"/>
       <Span>
         Bem vinda, {ongName}
       </Span>

       <Linkto to = '/incidents/new'>Cadastrar novo caso</Linkto>
       <ButtonOut onClick = {handleLogout}>
        <FiPower size = {18} color = "#E02041"/>
       </ButtonOut>
      </Header>

      <Title>Casos cadastrados</Title>
      <Ul>
       {incidents.map(incidents => (
         <Li key = {incidents.id}>
         <Strong>CASO:</Strong>
         <P>{incidents.title}</P>

         <Strong>DESCRIÇÃO</Strong>
         <P>{incidents.description}</P>

         <Strong>VALOR:</Strong>
         <P>{ Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incidents.value)}</P>

         <ButtonDelete onclick = {() => handleDelete(incidents.id )}>
           <FiTrash2 size = {20} color = "#a8a8b3"/>
         </ButtonDelete>
       </Li>
       ))}
      </Ul>
    </Container>
    )
}
