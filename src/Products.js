import React from 'react'
import Product from './Product'


const Products = ({products,onClick}) => {
  return (
    <div className='products'>
        { products.map((product)=>(
         <Product key={product.id} pselect={product} onClick={onClick}></Product>
    ))}
    {console.log(products)}
    </div>
  )
}

export default Products