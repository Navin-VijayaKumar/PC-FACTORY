import React, { useContext } from 'react';
import { Shopcontext } from '../Context/Shopcontext';
import { useParams } from 'react-router-dom';
import { Breadcrums } from '../Components/Breadcrums/Breadcrums';
import Displayproduct from '../Components/Display_product/Displayproduct';
import { Desbox } from '../Components/Desbox/Desbox';
import { Relatedproduct } from '../Components/Relatedproduct/Relatedproduct';
export const Product = () => {
  const { all_product } = useContext(Shopcontext);
  const { productId } = useParams();

  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <div>
      <Breadcrums product={product} />
      <Displayproduct product={product} />
      <Desbox />
      <Relatedproduct/>
    </div>
  );
};
