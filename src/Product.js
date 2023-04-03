import React from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'

const Product = ({pselect,onClick}) => {
  return (
    <div className='product'>
        <Container>
        <Card style={{color:'black', width:'200px'}} >
          <Card.Img src={pselect.img} width='100px' height={'100'}></Card.Img>
          <Card.Body>
            <Card.Title>{pselect.pname}</Card.Title>
            <Card.Text>{pselect.price}</Card.Text>
          </Card.Body>
        <Button><AiOutlineShoppingCart onClick={()=>onClick(pselect.id)}></AiOutlineShoppingCart></Button>
          </Card> 
        </Container>
          {console.log(pselect.pname)}
    </div>
  )
}

export default Product