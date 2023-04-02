import './App.css';


import { useState } from 'react';
import Products from './Products';
import NavB from './NavB'
import AddProduct from './AddProduct';

function App() {
  const [showForm, setShowForm]=useState(false)
  const [products, setProduct]=useState([
    {
      id:1,
      pname:'Turbo',
      price: 50000
    },
    {
      id:2,
      pname:'Smart Wax',
      price: 500
    },
    {
      id:3,
      pname:'BMC DiA Intake',
      price: 9500
    }
  ])
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
