import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Container = styled.div`
 width: 100%;
 max-width: 1180px;
 padding: 0 30px;
 margin: 32px auto;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  
  img {
    height: 64px;
  }
`

export const Span = styled.div`
  font-size: 20px;
  margin-left: 24px;
`

export const Linkto = styled(Link)`
  width: 260px;
  margin-left: auto;
  margin-top: 0;
  height: 60px;
  background: #e02041;
  border:0;
  border-radius: 8px;
  color: #fff;
  font-weight: 700;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  line-height: 60px;
  transition: filter 0.2s;

  &:hover{
    filter: brightness(90%)
  }
   
   &:hover {
     opacity: 0.8
   }
`

export const ButtonOut = styled.button`
  height: 60px;
  width: 60px;
  border-radius: 4px;
  border: 1px solid #dcdce6;
  background: transparent;
  margin-left: 16px;
  transition: border-color 0.2s;

  &:hover{
    border-color: #999;
  }
`

export const Title = styled.h1`
  margin-top: 80px;
  margin-bottom: 24px;
  font-size: 32px;
  font-weight: bold;
`

export const Ul = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px;
  list-style: none;
`

export const Li = styled.li`
   background: #fff;
   padding: 24px;
   border-radius: 8px;
   position: relative;
`

export const ButtonDelete = styled.button`
  position: absolute;
  right: 24px;
  top: 24px;
  border: 0;
  
  &:hover{
    opacity: 0.8;
  }
  
`

export const Strong = styled.strong`
  display: block;
  margin-bottom: 16px;
  color: #41414d;
  margin-top: 16px;
`
export const P = styled.p`
  color : #737380;
  line-height: 21px;
  font-size: 16px;
`






