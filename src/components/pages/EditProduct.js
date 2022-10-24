import React, { useState, useEffect } from "react";
import './AddProduct.css'

import { useNavigate, useParams } from "react-router-dom";
import { getProduct, editProduct } from "../../service/api.js";

const initualValues = {
  isim: "",
  cinsi: "",
  barkod: "",
  menşei: ""
}

const EditProduct = () => {

  const [product,setProduct] = useState(initualValues)
  const navigate = useNavigate()
  const { id } = useParams()
  
  useEffect(() => {
    getProductData();
  },[])

  const getProductData= async ()  => {
    let response = await getProduct(id)
    setProduct(response.data)
  }


  const onValueChange = (e) => {
    setProduct({...product, [e.target.name]: e.target.value})
  }

 const addProductDetails = async () => {
     await editProduct(product,id)
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
        <h4>Edit Product</h4>
        <label htmlFor="isim"> İsim </label>
        <input
          type="text"
          id="isim"
          name="isim"
          placeholder="Enter Name ..."
          onChange={(e) => onValueChange(e)}
          value={product.isim}

        />        
        <label htmlFor="barkod">Barkod </label>
        <input
          type="text"
          id="barkod"
          name="barkod"
          placeholder="Enter Barkod ..."
          onChange={(e) => onValueChange(e)}
          value={product.barkod}
          
        />        
        <label htmlFor="cinsi">Cinsi </label>
        <input
          type="text"
          id="cinsi"
          name="cinsi"
          placeholder="Enter Cinsi ..."
          onChange={(e) => onValueChange(e)}
          value={product.cinsi}


        />        
        <label htmlFor="menşei">Menşei </label>
        <input
          type="text"
          id="menşei"
          name="menşei"
          placeholder="Enter menşei ..."
          onChange={(e) => onValueChange(e)}
          value={product.menşei}

        />        
        <button onClick={() => addProductDetails()} type="button">Edit Product</button>
      </form>
    </div>
  );
};

export default EditProduct;
