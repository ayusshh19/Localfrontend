import React, { useState } from 'react'
import styled from 'styled-components'
import Login from '../components/Login'
import Register from '../components/Register'
import {useTranslation} from 'react-i18next'
import i18next from "i18next"

export default function Accounts() {
const [login,setlogin]=useState(false)
const {t} = useTranslation();
    const handleClick=(e)=>{
        i18next.changeLanguage(e.target.value)
        console.log(e.target.value)
    }
  return (
    <Accountscontainer>
        {/* <Languageselect onChange={(e)=> handleClick(e)}/>
        <h1>{t('Enter your name')}</h1> */}
        {
            login?<Login />:<Register />
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