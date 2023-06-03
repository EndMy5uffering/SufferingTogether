import React, { CSSProperties, useState } from 'react'
import './login.css'
import { Button, Input } from '@mui/material'
import bcrypt from 'bcryptjs';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-directions: column;
  align-items: center;
  justify-content: center;
`

const FormContainer = styled.div`
  width: 30%;
  border: 1px solid white;
  display: flex;
  align-itmes: center;
  justify-content: center;
  flex-direction: column;
  padding: 2rem 3rem;
  border-radius: 15px;
  gap: 2rem;
  background-color: #2f3542;
`

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
`

export const Login = () => {
  const [userName, setUserName] = useState<String>('')
  const [userPassword, setUserPassword] = useState<String>('')
  
  return (
    <Container>
      <FormContainer>
        <h1>Login</h1>
        <Input style={{color: 'white'}} color="primary" placeholder="User name" size="medium" onChange={(element) => { setUserName(element.target.value || '') }} />
        <Input type='password' style={{color: 'white'}} color="primary" placeholder="*****" size="medium" onChange={(element) => { setUserPassword(element.target.value || '') }} />
        <RowContainer>
          <Button variant='contained' color='success' onClick={() => { console.log({user: userName, pass: userPassword}) }}>Login</Button>
          <Button variant='contained' color='info'>Register</Button>
        </RowContainer>
      </FormContainer>
    </Container>
  )
}
