import axios from 'axios'

const API_URL = 'http://localhost:3002/products';


export const addProduct = async (data) => {
    try {
        return await axios.post(API_URL, data)
    }catch(error) {
        console.log("Error while calling AddProduct api", error.message);
    }
  
}

export const getProducts = async () => {
    try{
        return await axios.get(API_URL)

    }catch(error) {
        console.log('Error while calling getUsers api',error.message);
    }
}

export const getProduct = async (data) => {
    try{
        return await axios.get(`${API_URL}/${data}`)

    }catch(error) {
        console.log('Error while calling getUsers api',error.message);
    }
}

export const editProduct = async(data,id) => {
    try {
        return await axios.put(`${API_URL}/${id}`,data)
    } catch (error) {
        console.log('Error while calling editProduct api',error.message);

        
    }
}

export const deleteProduct= async (id) => {
    try {
        return await axios.delete(`${API_URL}/${id}`)
    } catch (error) {
        console.log('Error while calling deleteProduct api',error.message);
        
    }
}

