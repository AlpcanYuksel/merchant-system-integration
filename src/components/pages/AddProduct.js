import React, { useState, useEffect} from "react";
import useOperations from "./useOperations";
import { connect } from "react-redux";
import * as actions from "../../actions/product"
import './AddProduct.css'



const initialFieldValues = {
  productName: '',
  productType: '',
  productBarcode: '',
  productOrigin: ''
}

const AddProduct = (props) => {

  //validate()
  //validate({productName:'çikolatalım'})
  const validate = (fieldValues = product) => {
    let temp={}
    
    //temp.email =(/^$|.+@.+..+/).test(product.email)?"":"Email is not valid." or login method 
    if('productName' in fieldValues)
      temp.productName = fieldValues.productName?"":"This field is required."
    if('productType' in fieldValues)
      temp.productType = fieldValues.productType?"":"This field is required."
    if('productBarcode' in fieldValues)
      temp.productBarcode = fieldValues.productBarcode?"":"This field is required."
    if('productOrigin' in fieldValues)
      temp.productOrigin = fieldValues.productOrigin?"":"This field is required."

    setErrors({
      ...temp
    })

    if(fieldValues === product) 
      return Object.values(temp).every(x => x ==="")
  }

  const {
    product,
    setProduct,
    errors,
    setErrors, 
    handleInputChange
  } = useOperations(initialFieldValues,validate)


  const handleSubmit = (e) => {
    e.preventDefault()
    if(validate()) 
    {
      if(props.currentId === 0 )
      props.createProduct(product,()=>{window.alert('Eklendi')})
      else
      props.updateProduct(props.currentId,product,()=>{window.alert('Güncellendi')})
    }
  }

  useEffect(()=>{
    if(props.currentId != 0)
    setProduct({
      ...props.productList?.find(x => x.id == props.currentId)
    })
  },[props.currentId])
  
  return (
    <div>
      <form
      autoComplete="off"
      onSubmit={handleSubmit}
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
      >
        <label htmlFor="productName"> Ürün İsmi </label>
        <input
          type="text"
          id="productName"
          name="productName"
          placeholder="Enter Name ..."
          value={product.productName}
          onChange={handleInputChange}
          //Error input type search in google
        />        
      
        <label htmlFor="productType">Cinsi </label>
        <input
          type="text"
          id="productType"
          name="productType"
          placeholder="Enter Cinsi ..."
          value={product.productType}
          onChange={handleInputChange}

        />        
        <label htmlFor="productBarcode">Barkod </label>
        <input
          type="text"
          id="productBarcode"
          name="productBarcode"
          placeholder="Enter Barkod ..."
          value={product.productBarcode}
          onChange={handleInputChange}
          
        />  
        <label htmlFor="productOrigin">Menşei </label>
        <input
          type="text"
          id="productOrigin"
          name="productOrigin"
          placeholder="Enter menşei ..."
          value={product.productOrigin}
          onChange={handleInputChange}

        />
        <div>
        <button type="submit">Submit</button>
        </div>        
        
      </form>
    </div>
  );
};

const mapStateToProps = state => ({

  productList:state.product.list

})

const mapActionToProps = {
  createProduct: actions.create,
  updateProduct: actions.update,
}


export default connect(mapStateToProps,mapActionToProps) (AddProduct);












// const navigate = useNavigate()
  // const addProductDetails = async () => {
  //   await addProduct(product)
  //   navigate('/products')

  // }