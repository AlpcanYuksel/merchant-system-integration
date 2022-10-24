import React, { Component } from 'react'

const ProductContext = React.createContext();

export class ProductProvider extends Component {

    state = {
        productList : [
            {
                id:1,
                name:"Elektronik"
            },

            {
                id:2,
                name:"Moda"
            },

            {
                id:3,
                name:"Ev-Yaşam"
            }
        ]
    }
  render() {
    return (
      <div>
        <ProductContext.Provider value={this.state}>
            {this.props.children}
        </ProductContext.Provider>
        
      </div>
    )
  }
}
const ProductCunsomer = ProductContext.Consumer
export default ProductCunsomer

