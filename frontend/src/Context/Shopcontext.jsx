import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";
import { Product } from "../Pages/Product";

export const Shopcontext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length + 1; index++) {
        cart[index] = 0;
    }
    return cart;
};

const ShopcontextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

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
