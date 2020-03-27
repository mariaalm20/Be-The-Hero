import React, {useState} from 'react';
import {FiLogIn} from 'react-icons/fi'

import {useHistory} from 'react-router-dom'
import api from '../services/api'

import { 
  Container, 
  Form,
  Formline,
  Title,
  Input,
  Button,
  Linkto
      } from './styles'

import logo from '../../assets/logo.svg'
import heroesImg from '../../assets/heroes.png'

export default function Login() {
  const [id, setId] = useState('')
  const history = useHistory()

  async function handleLogin(e) {
    e.preventDefault()

    try{
      const response = await api.post('/sessions', {id})

      localStorage.setItem('ongId', id)
      localStorage.setItem('ongName', response.data.name)
      
      history.push('/profile')
    }
    catch(err){
     alert('Falha no Login, tente novamente')
    }
  }

  return (
    <Container>
      <Form>
      <img src = {logo} alt = "Logo" />

      <Formline onSubmit = {handleLogin}>
      <Title>Faça seu login</Title>

       <Input 
       placeholder = "Sua ID"
       value = {id}
       onChange = {e => setId(e.target.value)} />

       <Button type = "submit"> Entrar </Button>
      
       <Linkto to = "/register">
       <FiLogIn size = {16} color = "#E02041" style = {{marginRight: 10 }}/>
       Não tenho cadastro
       </Linkto>
       
      </Formline>

      </Form>

      <img src = {heroesImg} alt="Heroes"/>
    </Container>
  )
}
