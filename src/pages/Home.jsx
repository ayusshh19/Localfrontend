import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Banner from "../components/Banner";
import Categorycards from "../components/Categorycards";
import Nav from "../components/Nav";
import Products from "../components/Products";

export default function Home(props) {
  let {state}=useLocation()
  console.log(state)
  return (
    <>
      <Nav username={state?.username?state.username:''}/>
      <MainContainer>
        <Banner />
        <Categorycards />
        <Products />
      </MainContainer>
    </>
  );
}

const MainContainer = styled.div`
  width: 90%;
  height: 100vh;
  margin: auto;
  /* background-color: aqua; */
`;
