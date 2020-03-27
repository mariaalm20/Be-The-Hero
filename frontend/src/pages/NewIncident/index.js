import React, {useState} from 'react';
import {useHistory} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'
import { 
  Container, 
  Content, 
  Section, 
  Form, 
  Title,
  Text, 
  Linkto,
  Input,
  TextArea,
  Button    
} from './styles';

import logo from '../../assets/logo.svg'
import api from '../services/api'

export default function NewIncident() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')

  const ongId = localStorage.getItem('ongId')
  const history = useHistory()
  async function handleNewIncident(e){
   e.preventDefault()

   const data = {
     title,
     description,
     value
   }

   try{
    await api.post('incidents', data, {
       headers : {
         Authorization: ongId,
       }
    })
    history.push('/profile')
   } catch(err){
     alert('Erro ao cadastrar caso')
   }
  }
  
  return (
    <Container>
      <Content>
        <Section>
          <img src = {logo} alt = "Be The Hero"/>
          <Title>Cadastrar novo caso</Title>
          <Text>Descreva o caso detalhadamente para encontrar um heroi para resolvê-lo</Text>
          <Linkto to = "/profile">
           <FiArrowLeft size = {16} color = "#E02041" style = {{marginRight: 10 }}/>
           Voltar para Home
          </Linkto>
        </Section>

        <Form onSubmit = {handleNewIncident}>
        <Input 
          placeholder = "Título do caso"
          value = {title}
          onChange = {e => setTitle(e.target.value)}
        />
        <TextArea
          placeholder = "Descrição" 
          value = {description}
          onChange = {e => setDescription(e.target.value)}
        />
        <Input 
          placeholder = "Valor em reais"
          value = {value}
          onChange = {e => setValue(e.target.value)}
        />
       
        
        <Button type = "submit">Cadastrar</Button>
        </Form>
      </Content>
    </Container>
  )
}
