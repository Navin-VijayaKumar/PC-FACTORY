import React from 'react';
import './App.css';
import { Navbar } from './Components/Navbar/Navbar'; 
import { Routes, Route } from 'react-router-dom';
import { Shopcat } from './Pages/Shopcat';
import { Product } from './Pages/Product'; // Ensure this is defined
import { Cart } from './Pages/Cart'; // Ensure this is defined
import Shop from './Pages/Shop';
import cpu from './Components/Assets/cpu.png';
import gpu from './Components/Assets/gpu.png';
import ram from './Pages/Assets/ram.png';
import cabinet from './Pages/Assets/cabinet.png';
import About from './Pages/About';
import Contact from './Pages/Contact';

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/shop' element={<Shop />} />
                <Route path='/PreBuild' element={<Shopcat category="pre_build" />} />
                <Route path='/CPU' element={<Shopcat banner={cpu} category="cpu" />} />
                <Route path='/GPU' element={<Shopcat banner={gpu} category="gpu" />} />
                <Route path='/MotherBoard' element={<Shopcat category="mother_board" />} />
                <Route path='/Ram' element={<Shopcat banner={ram} category="ram" />} />
                <Route path='/Storage' element={<Shopcat category="storage" />} />
                <Route path='/SMPS' element={<Shopcat category="smps" />} />
                <Route path='/Case' element={<Shopcat banner={cabinet}  category="case" />} />
                <Route path='/product/:productId' element={<Product />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/about' element={<About></About>} />
                <Route path='/contact' element={<Contact></Contact>} />
            </Routes>
        </>
    );
}

export default App;
