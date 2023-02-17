import React, { useEffect, useState } from "react";
import styled from 'styled-components'
import Login from '../components/Login'
import Register from '../components/Register'
import axios from "axios";
export default function Accounts() {
const [login,setlogin]=useState(false)
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
    <Accountscontainer>
        {/* <Languageselect onChange={(e)=> handleClick(e)}/>
        <h1>{t('Enter your name')}</h1> */}
        {
            login?<Login location={location}/>:<Register location={location} setlogin={setlogin}/>
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