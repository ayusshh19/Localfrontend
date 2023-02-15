import React from 'react'
import styled from 'styled-components'
import Banner from '../components/Banner'
import Nav from '../components/Nav'

export default function Home() {
  return (
    <>
    <Nav />
    <MainContainer>
      <Banner />
    </MainContainer>
    </>
  )
}

const MainContainer=styled.div`
  width: 90%;
  height: 100vh;
  margin: auto;
  /* background-color: aqua; */
`
