import axios from 'axios'
import React, { useEffect, useState } from "react";

export default function Listdisplay() {
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
  useEffect(()=>{
    const getproducts=async ()=>{
      const allproducts =await axios.get('http://127.0.0.1:8000/allproducts/',{data:{'location':location}})
      console.log(allproducts)
    }
    getproducts()
  },[])
  return (
    <div>Listdisplay</div>
  )
}

