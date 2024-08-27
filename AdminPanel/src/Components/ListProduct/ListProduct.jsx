import './ListProduct.css'
import React,{ useEffect, useState } from 'react'
import delete1 from './Assets/delete1.png';

const ListProduct = () => {
  const [allproducts,setAllproducts]=useState([]);
  const fetchInfo= async ()=> {
    await fetch('http://localhost:4000/allproducts')
    .then((res)=>res.json())
    .then((data)=>{setAllproducts(data)});
   
  }
  useEffect(()=>{
    fetchInfo();
  },[])
  const remove_Product=async(id)=>{
    await fetch('http://localhost:4000/removeproduct',{
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json',


      },
      body:JSON.stringify({id:id})
    })
   await fetchInfo();

  }
  return (
 
  <div className="listproduct">

 
    <h1>All Products List</h1>
     <div className="listproduct-format-main">
      <p>Product</p>
      <p>Title</p>
      <p>Old price</p>
      <p>New price</p>
      <p>Category</p>
      <p>Remove</p>
     </div>
     <div className="list-all-product">
      <hr />
      {allproducts.map((product,index)=>{
        return <>
        <div key={index} className="listproduct-format-main listproduct-format">
          <img src={product.image} alt="" className="listproduct-icon" />
         <p>{product.name}</p>
         <p>${product.old_price}</p>
         <p>${product.new_price}</p>
         <p>{product.category}</p>
         <img onClick={()=>{remove_Product(product.id)}} src={delete1} alt="" className="listproduct-remove" />
        </div>
        <hr />
        </>
      })}

     </div>
    </div>

 

)
}

export default ListProduct