import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import elogo from "../assets/logo.png";
import ReactSearchBox from "react-search-box";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import CloseIcon from "@mui/icons-material/Close";
export default function Nav({username,location}) {
  const [closenav, setclosenav] = useState(true);
  const options = ["Shoes", "Clothes", "Electronic"];
  const defaultOption = "Category";
  const data = [
    {
      key: "john",
      value: "John Doe",
    },
    {
      key: "jane",
      value: "Jane Doe",
    },
    {
      key: "mary",
      value: "Mary Phillips",
    },
    {
      key: "robert",
      value: "Robert",
    },
    {
      key: "karius",
      value: "Karius",
    },
  ];
  const navigate = useNavigate();
  return (
    <Navbar>
      <Navleft>
        <img src={elogo} alt="" srcset="" />
      </Navleft>
      <Navcenter className={closenav ? "open" : "close"} close={closenav}>
        <Dropdown
          styles={{ border: "none" }}
          className="navdrop"
          options={options}
          value={defaultOption}
          placeholder="Select an option"
        />
        <Link to={""}>Deals</Link>
        <Link to={""}>Whats New</Link>
        <Link to={""}>Delivery</Link>
      </Navcenter>
      <Navitems>
        <ReactSearchBox
          placeholder="Search"
          value="Doe"
          data={data}
          callback={(record) => console.log(record)}
        />
        <Navright>
          <Navbutton onClick={()=>{navigate('/accounts')}}>
            <AccountCircleIcon /> Account
          </Navbutton>
          <Navbutton>
            <ShoppingCartIcon /> Cart
          </Navbutton>
          <div
            id="menu-close"
            onClick={() => {
              setclosenav(!closenav);
            }}
          >
            {closenav ? <MenuIcon /> : <CloseIcon />}
          </div>
          <div className="Welcome">
            <h3>{username?`Welcome ${username}`:''}</h3>
            <p>{location?.city} | {location?.region}</p>

          </div>

        </Navright>
      </Navitems>
    </Navbar>
  );
}

const Navbar = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  font-weight: bold;
  #menu-close {
    font-size: 2rem;
    cursor: pointer;
    display: none;
  }
  @media (max-width: 990px) {
    #menu-close {
      display: block;
    }
  }
`;
const Navleft = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex: 1;
  img {
    width: 5rem;
    height: 5rem;
  }
`;
const Navitems = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex: 2;
  .Dropdown-root {
    background-color: black;
  }
  img {
    width: 5rem;
    height: 5rem;
  }
  a {
    color: black;
    text-decoration: none;
  }
  @media (max-width:990px) {
    flex-direction: column;
    margin: 0.5rem;
    flex: 3;
    input{
      width: 100%;
    }
  }
`;
const Navcenter = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex: 2;
  .Dropdown-root {
    background-color: black;
  }
  img {
    width: 5rem;
    height: 5rem;
  }
  a {
    color: black;
    text-decoration: none;
  }
  @media (max-width: 990px) {
    position: absolute;
    top: 14%;
    right: 2%;
    width: 270px;
    height: 29vh;
    background-color: RGB(134, 155, 188);
    flex-direction: column;
    border-radius: 1rem;
    transition: all 0.5s ease;
    a:hover {
      transform: translateY(5px);
    }
    right: ${(props) => (props.close ? "100%" : "2%")};
  }
`;
const Navbutton = styled.button`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.3rem 1rem;
  background-color: transparent;
  cursor: pointer;
  border: none;
`;
const Navright=styled.div`
width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

`