import React, { createContext, useEffect, useState } from "react";
import { Product } from "../Pages/Product";

export const Shopcontext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < 300+ 1; index++) {
        cart[index] = 0;
    }
    return cart;
};

const ShopcontextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());
    const [all_product,setAll_Product]= useState([]);
    useEffect(()=>{
        fetch('http://localhost:4000/allproducts')
        .then((Response)=>Response.json())
        .then((data)=>setAll_Product(data))

    },[])
    const addTocart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    };

    const removeFromcart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item));
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount;
    };
    const getTotalcartitems=()=>
    
    {
        let totalcartitems=0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {

                totalcartitems+=cartItems[item];
            }
        }
        return getTotalcartitems;
    }

    const contextValue = { getTotalCartAmount,all_product, cartItems, addTocart, removeFromcart ,getTotalcartitems};

    return (
        <Shopcontext.Provider value={contextValue}>
            {props.children}
        </Shopcontext.Provider>
    );
};

export default ShopcontextProvider;
