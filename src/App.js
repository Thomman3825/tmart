import './App.css';


import { useEffect, useState } from 'react';
import Products from './Products';
import NavB from './NavB'
import AddProduct from './AddProduct';

import bmc from './Images/bmcDIA.jpg'
import smartwax from './Images/smartwax.jpg'
import turbo from './Images/turbo.jpg'

function App() {
  const [showForm, setShowForm]=useState(false)
  const [products, setProduct]=useState([])

  useEffect (() =>{
    const fetchProduct= async()=>{
      const res=await fetch('http://localhost:3333/products');
      console.log(res);
      const newData = await res.json()
      setProduct(newData)
    }
    fetchProduct()
  },[])
  
 
  const addProdruct =(product)=>{
    setProduct([...products,product])
  }
  


  return (
    
    <div >
      <header>
        <NavB onAdd={ () => setShowForm(!showForm)}></NavB>
      </header>
      <div>
     { showForm && <AddProduct onAdd={addProdruct}></AddProduct>}
     <Products products={products}></Products>
     </div>
     {/* {console.log(products)} */}
    </div>
  );
}

export default App;
