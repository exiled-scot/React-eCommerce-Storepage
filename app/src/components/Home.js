import React, { useState, useEffect } from "react";
import '../styling/home.css';
import Cards from './Card'
import Header from './Header';
import { Link } from 'react-router-dom';


const HomePage = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json))
            .catch(error => console.log(error));
    }, []);

    return (<>
        <Header />
        <div className="card-container">
            {products.map(product => (
                <div className="box">
                  <Link to={`/category/${product.id}`} style={{ textDecoration: "none", color: 'black' }}>
                    <Cards key={product.id} product={product} />
                  </Link>
                </div>
            ))}
        </div>
    </>
    );
};

export default HomePage;
