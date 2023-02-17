import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Loading from "../pages/Loading";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  height: "70%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  '@media (max-width: 990px)': {
    width: "100%",
    height:'85%',
  },
};

const goToCheckout = e => {
  history.push(`/checkout/${props.cart.id}`)
  localStorage.setItem('cart-id', props.cart.id)
  props.setModalOpen(false)
  props.setCheckout(true)
}

export default function Products() {
  const [productdata, setproductdata] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [loading,setloading]=useState(true)
  const [modalitem, setmodalitem] = useState({});
  const handleOpen = (id) => {
    
    productdata.map((data) => {
      if (data.id === id) {
        setmodalitem(data);
        setOpen(true)
        console.log(modalitem)
      }
      return 'done'
    });

  };
  const handleClose = () => setOpen(false);
  useEffect(() => {
    const getproducts = async () => {
      const data = await axios.get("https://fakestoreapi.com/products");
      setproductdata(data.data);
      setloading(false)
    };
    getproducts();
  }, []);
  return (
    <>
      {loading?<Loading />:<><h1>Our Trending Products</h1>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Modalcontainer>
            <Modaleft>
            <img src={modalitem?.image} alt="" />
            </Modaleft>
            <Modalright>
              <h4>{modalitem?.category}</h4>  
              <h2>{modalitem?.title}</h2>
              <p>{modalitem?.description}</p>
              <h1>Price : ₹ {modalitem?.price}</h1>
              <p>Ratings : {modalitem?.rating?.rate}</p>
              <Modalbuttoncontainer>
                <Modalbutton
                onClick={goToCheckout}
                >
                    Buy Now
                </Modalbutton>
                <Modalbutton>
                    Add to Cart
                </Modalbutton>
              </Modalbuttoncontainer>
            </Modalright>
          </Modalcontainer>
        </Box>
      </Modal>
      <Productcontainer>
        {productdata.map((data) => {
          return (
            <Productcards onClick={() =>{ handleOpen(data.id)}}>
              <div className="prodimg">
                <img src={data.image} alt="" />
              </div>
              <div className="productcontainer">
                <p>{data.category}</p>
                <p className="prodtitle">{data.title}</p>
                <h2>₹ {data.price}</h2>
                <p>Ratings : {data.rating.rate}</p>
              </div>
            </Productcards>
          );
        })}
      </Productcontainer></>}
    </>
  );
}
const Productcards = styled.div`
  width: 250px;
  height: 400px;
  margin: 2rem;
  .prodimg {
    width: 100%;
    height: 60%;
  }
  .productcontainer {
    width: 100%;
    height: 40%;
    line-height: 1rem;
    p {
      color: grey;
      font-weight: bold;
    }
    .prodtitle {
      color: black;
    }
  }
  img {
    width: 100%;
    height: 100%;
  }
`;
const Productcontainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
const Modalcontainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  @media (max-width:990px) {
    flex-direction: column;
    font-size: small;
  }
`;
const Modaleft = styled.div`
  width: 50%;
  height: 100%;
  img{
    width: 80%;
    height: 100%;
  }
  @media (max-width:990px) {
    width: 100%;
    height: 35%;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
      width: 50%;
      height: 100%;
    }
  }
`;
const Modalright = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width:990px) {
    width: 100%;
    height: 60%;
    line-height: 1rem;
  }
`;
const Modalbutton=styled.button`
    padding: 1rem;
    border-radius: 2rem;
    width: 30%;
    background-color: RGB(134, 155, 188);
    color: white;
`
const Modalbuttoncontainer=styled.div`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
`