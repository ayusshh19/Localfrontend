import React, { useState } from 'react'
import styled from 'styled-components'
import Login from '../components/Login'
import Register from '../components/Register'

export default function Accounts() {
const [login,setlogin]=useState(false)

  return (
    <Accountscontainer>
        {/* <Languageselect onChange={(e)=> handleClick(e)}/>
        <h1>{t('Enter your name')}</h1> */}
        {
            login?<Login />:<Register setlogin={setlogin}/>
        }
    </Accountscontainer>
  )
}

const Accountscontainer=styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;

`