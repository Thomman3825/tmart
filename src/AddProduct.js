import React from 'react'
import { useState } from 'react'
import { Form } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
const AddProduct = ({onAdd}) => {
    const[pname,setName]= useState('')
    const[price,setPrice]= useState('')

    const onSubmit=(e)=>{
        e.preventDefault()
        console.log('Submit Clicked');
       // onAdd({pname,price})

        setName('')
        setPrice(0)

    }

  return (
    <div>
        <Card>
            <Card.Body>
                <Card.Title>
                    Add Product
                </Card.Title>
                
        <form onSubmit={onSubmit}>
            <label>Product Name </label>
            <input type='text' placeholder='Enter product name' value = {pname} onChange={(e)=>setName(e.target.value)} ></input><br></br>
            <label>Price</label>
            <input type='number' value = {price} onChange={(e)=>setPrice(e.target.value)}></input><br></br>
            <input type='submit' value='Add'></input>
        </form>
                
            </Card.Body>
        </Card>
    </div>
  )
}

export default AddProduct