import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {addProduct} from "../../service/api.js";
import './AddProduct.css'



const initualValues = {
  isim: "",
  cinsi: "",
  barkod: "",
  menşei: ""
}

const AddProduct = () => {

  const [product,setProduct] = useState(initualValues)
  const navigate = useNavigate()



  const onValueChange = (e) => {
    setProduct({...product, [e.target.name]: e.target.value})
  }

  const addProductDetails = async () => {
    await addProduct(product)
    navigate('/products')

  }


  return (
    <div style={{ marginTop: "100px" }}>
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
      >
        
        <label htmlFor="isim"> İsim </label>
        <input
          type="text"
          id="isim"
          name="isim"
          placeholder="Enter Name ..."
          onChange={(e) => onValueChange(e)}
        />        
        <label htmlFor="barkod">Barkod </label>
        <input
          type="text"
          id="barkod"
          name="barkod"
          placeholder="Enter Barkod ..."
          //value={product.barkod}
          onChange={(e) => onValueChange(e)}
          
        />        
        <label htmlFor="cinsi">Cinsi </label>
        <input
          type="text"
          id="cinsi"
          name="cinsi"
          placeholder="Enter Cinsi ..."
          //value={product.cinsi}
          onChange={(e) => onValueChange(e)}

        />        
        <label htmlFor="menşei">Menşei </label>
        <input
          type="text"
          id="menşei"
          name="menşei"
          placeholder="Enter menşei ..."
          //value={product.menşei}
          onChange={(e) => onValueChange(e)}

        />        
        <button onClick={() => addProductDetails()} type="button">Add</button>
      </form>
    </div>
  );
};

export default AddProduct;
