import React from 'react'
import Product from './Product'


const Products = ({products}) => {
  return (
    <div className='products'>
        { products.map((product)=>(
         <Product key={product.id} pselect={product}></Product>
    ))}
    {console.log(products)}
    </div>
  )
}

export default Products