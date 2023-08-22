import { useState, useEffect } from "react";
import '../styling/category.css';
import Cards from './Card';
import { Link } from 'react-router-dom';


const Men = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/category/men's%20clothing")
            .then(res => res.json())
            .then(json => setProducts(json))
            .catch(error => console.log(error));
    }, []);


    return (
        <div className="main-section">
            <div className="card-container">
                {products.map(product => (
                    <div className="box" key={product.id}>
                        <Link to={`/category/men/${product.id}`} style={{ textDecoration: "none", color: 'black' }}>
                            <Cards product={product} />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Men;
