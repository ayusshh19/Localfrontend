import React from "react";
import styled from "styled-components";
import Spline from '@splinetool/react-spline';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

export default function Banner() {
  return (
    <Bannercontainer>
      <Bannerleft>
        <h1>Shop Online With Offers <br /> Relax and Enjoy at home</h1>
        <Bannerbutton>
            Buy Now <LocalGroceryStoreIcon />
        </Bannerbutton>
      </Bannerleft>
      <Bannerright>
      <Spline scene="https://prod.spline.design/DPuk2GhbwJrLgUVg/scene.splinecode" style={{display:'block',width:'100%',height:'100%',borderRadius:'2rem'}}/>
      </Bannerright>
    </Bannercontainer>
  );
}

const Bannercontainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 300px;
  background-color: RGB(235, 187, 177);
  border-radius: 2rem;

`;
const Bannerleft = styled.div`
flex: 1;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
color: RGB(134, 155, 188);
@media (max-width:990px) {
    display: none;
}

`;
const Bannerbutton=styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.7rem;
    border-radius: 3rem;
    background-color: RGB(134, 155, 188);
    color: white;
    border: none;
`
const Bannerright = styled.div`
flex:2;
height:100%;

`;
