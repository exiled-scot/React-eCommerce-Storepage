import React from "react";
import '../styling/category.css'
import Card from 'react-bootstrap/Card';
import man from '../images/mens.jpg';
import woman from '../images/women.jpg';
import jewellery from '../images/jewellery.jpg';
import electronics from '../images/electronics.jpg';
import { Container } from "react-bootstrap";
import { Link } from 'react-router-dom';

const Category = () => {

   return (
      <>
         <Link className="link" to='/category/men'>
            <Container className="main justify-content-center">
               <Card className="card">
                  <Card.Img className="" src={man} />
                  <Card.Body>
                     <Card.Text className="txt">
                        <b>Men</b>
                     </Card.Text>
                  </Card.Body>
               </Card>
            </Container>
         </Link>
         <Link className="link" to='/category/women'>
            <Container className="main justify-content-center">
               <Card className="card">
                  <Card.Img src={woman} />
                  <Card.Body>
                     <Card.Text className="txt">
                        <b>Women</b>
                     </Card.Text>
                  </Card.Body>
               </Card>
            </Container>
         </Link>
         <Link className="link" to='/category/jewellery'>
            <Container className=" main justify-content-center">
               <Card className="card">
                  <Card.Img src={jewellery} />
                  <Card.Body>
                     <Card.Text className="txt">
                        <b>Jewellery</b>
                     </Card.Text>
                  </Card.Body>
               </Card>
            </Container>
         </Link>
         <Link className="link" to='/category/electronics'>
            <Container className="main justify-content-center">
               <Card className="card">
                  <Card.Img src={electronics} />
                  <Card.Body>
                     <Card.Text className="txt">
                        <b>Electronics</b>
                     </Card.Text>
                  </Card.Body>
               </Card>
            </Container>
         </Link>
      </>
   );
}

export default Category;
