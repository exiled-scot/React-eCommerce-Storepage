import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import HomePage from './components/Home';
import Category from './components/Category';
import Men from './components/Men';
import Women from './components/Women';
import Jewellery from './components/Jewellery';
import Electronics from './components/Electronics';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ProductDetails from './components/ProductDetails';
import TitleBar from './components/TitleBar'; // Import the TitleBar component

function App() {
  return (
    <>
      <TitleBar /> {/* Add the TitleBar component */}
      <Routes>
        <Route path='/' element={<HomePage />} ></Route>
        <Route path='/category' element={<Header />} >
          <Route index element={<Category />}></Route>
          <Route path=':productId' element={<ProductDetails />} />
          <Route path='men' element={<Men />} ></Route>
          <Route path='men/:productId' element={<ProductDetails />} />
          <Route path='women' element={<Women />} ></Route>
          <Route path='women/:productId' element={<ProductDetails />} ></Route>
          <Route path='jewellery' element={<Jewellery />} ></Route>
          <Route path='jewellery/:productId' element={<ProductDetails />} ></Route>
          <Route path='electronics' element={<Electronics />} ></Route>
          <Route path='electronics/:productId' element={<ProductDetails />} ></Route>
        </Route>
       </Routes>
    </>
  );
}

export default App;
