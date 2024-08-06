import React from 'react'
import './Relatedproduct.css'
import Data_product from '../Assets/Data_Product';
import { Items } from '../Items/Items'
export const Relatedproduct = () => {
  return (
    <div className='relatedproduct'>
        <h1>Related Products</h1>
        <hr/>
        <div className="relatedproduct-items">
          {Data_product.map((item, i)=>{
            return <Items
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
        />
          })}
        </div>
            

    </div>
  )
}
