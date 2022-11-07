import React, {useState, useEffect, } from 'react'
const useOperations = (initialFieldValues,validate) => {
  const [product,setProduct]= useState (initialFieldValues)
  const [errors, setErrors] = useState({})

  const handleInputChange = e => {
    const {name, value} = e.target
    const fieldValue = { [name]: value }
    setProduct({...product, ...fieldValue})
    validate(fieldValue)
  }
  

  return {
    product,
    setProduct,
    errors,
    setErrors,
    handleInputChange
    
  };
}

export default useOperations
