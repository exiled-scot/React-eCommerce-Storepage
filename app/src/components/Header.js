import Container from 'react-bootstrap/Container';
import '../styling/header.css';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet } from 'react-router-dom';

const Header = () => {

    return (
        <>
           <Navbar>
                <Container fluid className="main-class">
                    <Link to="/" className="item">Home</Link>
                    <Link to="/category" className="item">Category</Link>
                </Container>
            </Navbar>
            <Outlet/>
        </>
    );
}

export default Header;
