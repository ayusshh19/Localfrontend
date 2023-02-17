import React from 'react'
import styled from 'styled-components'
import load from '../assets/shopping.gif'
export default function Loading() {
  return (
    <>
    <Loadingcomponent>
      <img src={load} alt="hey" srcset="" />
    </Loadingcomponent>
    
    </>
  )
}

const Loadingcomponent=styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #3f3c3c;
  img{
    width: 30%;
    height: 30%;
  }
`