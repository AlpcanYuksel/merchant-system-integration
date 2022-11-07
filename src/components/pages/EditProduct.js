// import React, { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import useOperations from "./useOperations";
// import * as actions from "../../actions/product"
// import { connect } from "react-redux";

// import './AddProduct.css'


// const initialFieldValues = {
//   productName: '',
//   productType: '',
//   productBarcode: '',
//   productOrigin: ''
// }

// const EditProduct = () => {

//   const [currentId,setCurrentId] = useState()
//   const navigate = useNavigate()
//   const { id } = useParams()
  
//   const {
//     product,
//     setProduct,
//     handleInputChange
//   } = useOperations(initialFieldValues)



//   return (
//     <div style={{ marginTop: "100px" }}>
//       <form
//         style={{
//           margin: "auto",
//           padding: "15px",
//           maxWidth: "400px",
//           alignContent: "center",
//         }}
//       >
//         <h4>Edit Product</h4>
//         <label htmlFor="productName"> İsim </label>
//         <input
//           type="text"
//           id="productName"
//           name="productName"
//           placeholder="Enter Name ..."
//           onChange={handleInputChange}
//           value={product.productName}

//         />        
//         <label htmlFor="productType">Barkod </label>
//         <input
//           type="text"
//           id="productType"
//           name="productType"
//           placeholder="Enter Barkod ..."
//           onChange={handleInputChange}
//           value={product.productType}
          
//         />        
//         <label htmlFor="productBarcode">Cinsi </label>
//         <input
//           type="text"
//           id="productBarcode"
//           name="productBarcode"
//           placeholder="Enter Cinsi ..."
//           onChange={handleInputChange}
//           value={product.productBarcode}


//         />        
//         <label htmlFor="productOrigin">Menşei </label>
//         <input
//           type="text"
//           id="productOrigin"
//           name="productOrigin"
//           placeholder="Enter menşei ..."
//           onChange={handleInputChange}
//           value={product.productOrigin}

//         />        
//         <button /*onClick={() => addProductDetails()}*/ type="button">Edit Product</button>
//       </form>
//     </div>
//   );
// };

// const mapStateToProps = state => ({

//   productList:state.product.list

// })

// const mapActionToProps = {
//   updateProduct: actions.update,
// }

// export default connect (mapStateToProps,mapActionToProps) (EditProduct);



//   // useEffect(() => {
//   //   getProductData();
//   // },[])

//   // const getProductData= async ()  => {
//   //   let response = await getProduct(id)
//   //   setProduct(response.data)
//   // }


// //  const addProductDetails = async () => {
// //      await editProduct(product,id)
// //      navigate('/products')

// //   }