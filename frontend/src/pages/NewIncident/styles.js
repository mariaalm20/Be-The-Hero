import styled from 'styled-components'
import {Link} from 'react-router-dom'


export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;
  
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  width: 100%;
  padding: 96px;
  background: #f0f0f5;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Section = styled.div`
  width: 100%;
  max-width: 380px;
`


export const Title = styled.h1`
   margin: 64px 0 32px;
   font-size: 32px;
   font-weight: bold;
`


export const Text = styled.h1`
  font-size: 18px;
  color: #737380;
  line-height: 32px;
`

export const Linkto = styled(Link)`
   display: flex;
   align-items: center;
   margin-top: 40px;
   color: #41414d;
   font-size: 18px;
   text-decoration: none;
   font-weight: bold;
   transition: opacity 0.2s;
   
   &:svg {
     margin-right: 20px;
   }

   &:hover {
     opacity: 0.8
   }
`

export const Form = styled.form`
    width: 100%;
    max-width: 450px;
`

export const Input = styled.input`
   margin-top: 8px;
   width: 100%;
   height: 60px;
   border: 1px solid #dcdce6;
   border-radius: 8px;
   padding: 0 24px;
   color: #333;
`

export const TextArea  = styled.textarea`
  margin-top: 8px;
  width: 100%;
  min-height: 140px;
  resize: vertical;
  color: #000;
  height: 60px;
  border: 1px solid #dcdce6;
  border-radius: 8px;
  padding: 16px 24px;
  line-height: 24px;

`


export const Button = styled.button`
  width: 100%;
  height: 60px;
  background: #e02041;
  border:0;
  border-radius: 8px;
  color: #fff;
  font-weight: 700;
  margin-top: 16px;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  line-height: 60px;
  transition: filter 0.2s;

  &:hover{
    filter: brightness(90%)
  }
`


