import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Banner from "../components/Banner";
import Categorycards from "../components/Categorycards";
import Nav from "../components/Nav";
import Products from "../components/Products";

export default function Home(props) {
  const [location, setlocation] = useState();
  useEffect(() => {
    const getlocation = async () => {
      const data = await axios.get(
        "https://ipinfo.io/103.201.151.202/json?token=f9b1eb5a049d29"
      );
      setlocation(data.data);
      console.log(data.data);
    };
    getlocation();
  }, []);
  return (
      <>
        <Nav
          username={props.state?.username ? props.state.username : ""}
          location={location}
        />
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
