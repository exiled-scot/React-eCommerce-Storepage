import React from 'react';
import { Link } from 'react-router-dom';

const TitleBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to="/">My App</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/category">Category</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/men">Men</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/women">Women</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/jewellery">Jewellery</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/electronics">Electronics</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default TitleBar;
