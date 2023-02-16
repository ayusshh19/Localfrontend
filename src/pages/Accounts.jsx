import React, { useState } from 'react'
import styled from 'styled-components'
import Login from '../components/Login'
import Register from '../components/Register'

export default function Accounts() {
const [login,setlogin]=useState(false)
  return (
    <Accountscontainer>
        {
            login?<Login />:<Register />
        }
    </Accountscontainer>
  )
}

const Accountscontainer=styled.div`

`