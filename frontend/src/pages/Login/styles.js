import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Form = styled.section`
  width: 100%;
  max-width: 350px;
  margin-right: 30px;
`

export const Formline = styled.form`
  margin-top: 100px;
`

export const Title = styled.text`
   font-size: 32px;
   font-weight: bold;
`

export const Input = styled.input`
   margin-top: 32px;
   width: 100%;
   height: 60px;
   border: 1px solid #dcdce6;
   border-radius: 8px;
   padding: 0 24px;
   color: #333;
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