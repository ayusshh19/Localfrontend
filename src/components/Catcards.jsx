import React from 'react'
import styled from 'styled-components'
import Spline from '@splinetool/react-spline';

export default function Catcards({url}) {
  return (
    <Categorycardcontainer>
        <Spline scene={url} style={{display:'block',width:'100%',height:'100%',borderRadius:'2rem'}}/>
    </Categorycardcontainer>
  )
}

const Categorycardcontainer=styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: RGB(134, 155, 188); */

    /* width: 100%; */
`
