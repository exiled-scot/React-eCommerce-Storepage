import Container from 'react-bootstrap/Container';
import '../styling/header.css';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet } from 'react-router-dom';

const Header = () => {
    return (
        <>
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
                                <Link className="nav-link" to="/category/men">Men</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/category/women">Women</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/category/jewellery">Jewellery</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/category/electronics">Electronics</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/signin">Sign In</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/language">Language</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/cart">Cart</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <Outlet />
        </>
    );
}

export default Header;
