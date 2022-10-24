import Navbar from './components/Navbar/Navbar';
import Products from './components/pages/Products';
import SignUp from './components/Login/SignUp';
import AddProduct from './components/pages/AddProduct';
import EditProduct from './components/pages/EditProduct';
import {Routes,Route} from "react-router-dom"
import './App.css';



function App() {
  return (
  <>
    <Navbar />
    <Routes>
      <Route path='/products' element={<Products />} />
      <Route path='/add' element={<AddProduct />} />
      <Route path='/edit/:id' element={<EditProduct />} />
      <Route path='/auth' element={<SignUp />} />

    </Routes>
  </>
  );
}

export default App;
