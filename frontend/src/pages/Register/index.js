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
  Div,
  Button    
} from './styles';

import logo from '../../assets/logo.svg'
import api from '../services/api'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [city, setCity] = useState('')
  const [uf, setUf] = useState('')

  const history = useHistory('')

  async function handleRegister(e){
   e.preventDefault() //nao recarrega a pagina
   const data = {
    name, email, whatsapp, city, uf
  }
   try{
   const response = await api.post('/ongs', data)
   
   alert(`Seu ID de acesso: ${response.data.id}`)
   history.push('/')
  }
  catch(err){
    alert('Erro no cadastro, tente novamente')
  }
}

  return (
    <Container>
      <Content>
        <Section>
          <img src = {logo} alt = "Be The Hero"/>
          <Title>Cadastrar</Title>
          <Text>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem casos da sua ONG</Text>
          <Linkto to = "/">
           <FiArrowLeft size = {16} color = "#E02041" style = {{marginRight: 10 }}/>
           Voltar para tela de Login
          </Linkto>
        </Section>

        <Form onSubmit = {handleRegister}>
        <Input 
        placeholder = "Nome da ONG"
        value = {name}
        onChange = {e => setName(e.target.value)} //e = param que recebe e a modificação
        ></Input>
        
        <Input 
        type = "email" 
        placeholder = "E-mail"
        value = {email}
        onChange = {e => setEmail(e.target.value)} 
        ></Input>
        
        <Input
        placeholder = "Whatsapp"
        value = {whatsapp}
        onChange = {e => setWhatsapp(e.target.value)} /> 
        
        <Div>
        <Input 
        placeholder = "Cidade"
        value = {city}
        onChange = {e => setCity(e.target.value)} 
        ></Input>

        <Input 
        placeholder = "UF"
        value = {uf}
        onChange = {e => setUf(e.target.value)} 
        style = {{ 
          width : 80, 
          marginLeft: 10
        }}></Input>
        </Div>
      
        <Button type = "submit">Cadastrar</Button>
        </Form>
      </Content>
    </Container>
  )
}
