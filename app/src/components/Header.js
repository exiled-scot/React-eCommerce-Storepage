import { FaUser, FaLanguage, FaShoppingCart } from 'react-icons/fa';
import { GrLanguage } from 'react-icons/gr';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet } from 'react-router-dom';
import '../styling/header.css';

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        Trendique
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/category">
                                    Category
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/category/men">
                                    Men
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/category/women">
                                    Women
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/category/jewellery">
                                    Jewellery
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/category/electronics">
                                    Electronics
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/signin">
                                    Sign In
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/language">
                                  <GrLanguage size={24}/>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/cart">
                                  <FaShoppingCart size={24}/>

                                </a>
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
