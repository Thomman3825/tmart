import React from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'

const Product = ({pselect}) => {
  return (
    <div >
        <Container>
        <Card style={{color:'black'}} >
          <Card.Img></Card.Img>
          <Card.Body>
            <Card.Title>{pselect.pname}</Card.Title>
            <Card.Text>{pselect.price}</Card.Text>
          </Card.Body>
        <Button><AiOutlineShoppingCart></AiOutlineShoppingCart></Button>
          </Card> 
        </Container>
          {console.log(pselect.pname)}
    </div>
  )
}

export default Product