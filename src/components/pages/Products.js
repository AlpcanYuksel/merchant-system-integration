import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/product";
import "./Product.css";
import AddProduct from "./AddProduct";



const Products = (props) => {
  const [currentId, setCurrentId] = useState(0)

  useEffect(() => {
    props.fetchAllProducts();
  }, [props]); //componentDidMount

  const onDelete = id => {
    if(window.confirm('Silmek istediğinden emin misin?'))
    props.deleteProduct(id,()=>{window.alert('Silindi')})
  }
  return (
    <div className="float-container">
      <div className= "float-child-1">
        <AddProduct {...({currentId,setCurrentId})} />
      </div>
    <div className="float-child-2">
      <table className="styled-table">
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>İsim</th>
            <th style={{ textAlign: "center" }}>Cinsi</th>
            <th style={{ textAlign: "center" }}>Barkod</th>
            <th style={{ textAlign: "center" }}>Menşei</th>
            <th style={{ textAlign: "center" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.productList.map((product, index) => {
            return (
              <tr key={index} >
                <td>{product.productName}</td>
                <td>{product.productType}</td>
                <td>{product.productBarcode}</td>
                <td>{product.productOrigin}</td>
                <td>
                    <button className="btn btn-edit"
                      onClick={() => {setCurrentId(product.id)}}
                      > Edit
                    </button>
                    <button className="btn btn-delete"
                    onClick={() => onDelete(product.id)}
                    >Delete</button>
                  
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  </div>
  );
};

const mapStateToProps = (state) => ({
  productList: state.product.list,
});

const mapActionToProps = {
  fetchAllProducts: actions.fetchall,
  deleteProduct: actions.Delete
};

export default connect(mapStateToProps, mapActionToProps)(Products);

// import React, { useEffect, useState, } from "react";
// import { Link } from "react-router-dom";
// import { getProducts, deleteProduct } from "../../service/api";
// import "./Product.css";

// const Products = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     getProductDetails();
//   }, []);

//   const getProductDetails = async () => {
//     let response = await getProducts();
//     console.log(response);
//     setProducts(response.data);
//   };

//   const deleteProductData = async (id) => {
//     await deleteProduct(id)
//     getProductDetails()
//   }

//   return (
//     <div style={{ marginTop: "150px" }}>
//       <table
//       className="styled-table">
//         <thead>
//           <tr>
//             <th style={{ textAlign: "center" }}>ID</th>
//             <th style={{ textAlign: "center" }}>İsim</th>
//             <th style={{ textAlign: "center" }}>Barkod</th>
//             <th style={{ textAlign: "center" }}>Cinsi</th>
//             <th style={{ textAlign: "center" }}>Menşei</th>
//             <th style={{ textAlign: "center" }}>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map((product) => {
//             return (
//               <tr key={product.id}>
//                 <td>{product.id}</td>
//                 <td>{product.isim}</td>
//                 <td>{product.cinsi}</td>
//                 <td>{product.barkod}</td>
//                 <td>{product.menşei}</td>
//                 <td>
//                   <Link to={`/edit/${product.id}`}>
//                     <button className="btn btn-edit">Edit</button>
//                   </Link>
//                   <Link>
//                     <button
//                       className="btn btn-delete"
//                       onClick={() => deleteProductData(product.id)}
//                     >
//                       Delete
//                     </button>
//                   </Link>
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//       <Link to={`/add`}>
//         <button  className="btn">Add</button>
//       </Link>
//     </div>
//   );
// };
// export default Products;
