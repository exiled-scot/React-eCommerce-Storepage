import { useState, useEffect } from "react";
import '../styling/category.css';
import Cards from './Card';
import { Link } from 'react-router-dom';

const Jewellery = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/category/jewelery")
            .then(res => res.json())
            .then(json => setProducts(json))
            .catch(error => console.log(error));
    }, []);


    return (<>
        <div className="main-section">
            <div className="card-container">
                {products.map(product => (
                    <div className="box" >
                        <Cards key={products.map(product => (
                 <div className="box">
                     <Link to={`/category/jewellery/${product.id}`} style={{ textDecoration: "none", color: 'black' }}>
                         <Cards key={product.id} product={product} />
                     </Link>
                 </div>
             ))} product={product} />
                    </div>
                ))}
            </div>
        </div>

    </>
    );
}

export default Jewellery
