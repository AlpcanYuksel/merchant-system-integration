import Navbar from './components/Navbar/Navbar';
import Products from './components/pages/Products';
import SıgnInOutContainer from './components/containers';
import {Routes,Route} from "react-router-dom"

import './App.css';




function App() {
  return (
    <>
     <Navbar />
     <Routes>
       <Route path='/products' element={<Products />} />
       <Route path='/auth' element={<SıgnInOutContainer />} />
     </Routes>

     </>
  );
}

export default App;
