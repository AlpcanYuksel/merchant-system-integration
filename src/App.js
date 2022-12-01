import Navbar from './components/Navbar/Navbar';
import Products from './components/pages/Products';
import SıgnInOutContainer from './components/containers';
import {Routes,Route} from "react-router-dom"
import { store } from './actions/store';
import { Provider } from 'react-redux';
import './App.css';




function App() {
  return (
  // <>
  //   <Navbar />
  //   <Routes>
  //     <Route path='/products' element={<Products />} />
  //     <Route path='/add' element={<AddProduct />} />
  //     <Route path='/edit/:id' element={<EditProduct />} />
  //     <Route path='/auth' element={<SignUp />} />

  //   </Routes>
  // </>

  <Provider store = {store}>

     <Navbar />
     <Routes>
       <Route path='/products' element={<Products />} />
       <Route path='/auth' element={<SıgnInOutContainer />} />
     </Routes>

  </Provider>
  );
}

export default App;
