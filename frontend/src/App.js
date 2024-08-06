import React from 'react';
import './App.css';
import { Navbar } from './Components/Navbar/Navbar'; // Ensure this is defined
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopcontextProvider from './Context/Shopcontext';
import { Shopcat } from './Pages/Shopcat';
import { Product } from './Pages/Product'; // Ensure this is defined
import { Cart } from './Pages/Cart'; // Ensure this is defined
import { Shop } from './Pages/Shop';
import cpu_banner from './Components/Assets/bannercpu.jpg';
import gpu_banner from './Components/Assets/bannergpu1.jpg';

function App() {
    return (
        <>
        <ShopcontextProvider>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/shop' element={<Shop />} />
                    <Route path='/PreBuild' element={<Shopcat category="" />} />
                    <Route path='/CPU' element={<Shopcat banner={cpu_banner} category="cpu" />} />
                    <Route path='/GPU' element={<Shopcat banner={gpu_banner} category="gpu" />} />
                    <Route path='/MotherBoard' element={<Shopcat category="mother board" />} />
                    <Route path='/Ram' element={<Shopcat category="ram" />} />
                    <Route path='/Storage' element={<Shopcat category="storage" />} />
                    <Route path='/SMPS' element={<Shopcat category="smps" />} />
                    <Route path='/Case' element={<Shopcat category="case" />} />
                    <Route path='/product/:productId' element={<Product />} /> {/* Corrected route */}
                    <Route path='/cart' element={<Cart />} />
                </Routes>
            </BrowserRouter>
        </ShopcontextProvider>
        </>
    );
}

export default App;
