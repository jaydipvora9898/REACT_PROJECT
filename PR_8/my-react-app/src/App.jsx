import './App.css'
import Header from './Component/Home/Header/Header';
import Home from './Component/Home/Home'
import { Route, Routes } from 'react-router-dom'
import AddProduct from './Component/Home/Add-Product/Add-Product'
import Men from './Component/MEN/Men';
import Women from './Component/WOMEN/Women';
import Kids from './Component/KIDS/Kids';

function App() {



  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
      </Routes>
    </>
  )
}

export default App
