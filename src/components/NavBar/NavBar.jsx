import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css';
const NavBar = () => {
    return (
        <>
            {[false].map((expand) => (
                <Navbar key={expand} bg="light" expand={expand} className="mb-3 py-3">
                    <Container >
                        <Navbar.Brand className='text-primary fw-bold fs-2 '><Link className='link-underline-opacity-0 link-underline ' to={'/'}>Movie Zone</Link></Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    Movie Zone
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3 text-dark link-underline link-underline-opacity-0">
                                    <NavLink className={({ isActive }) => isActive ? "text-primary link-underline link-underline-opacity-0" : "text-dark link-underline link-underline-opacity-0"} to={'/'}>Home</NavLink>
                                    <NavLink className={({ isActive }) => isActive ? "text-primary link-underline link-underline-opacity-0" : "text-dark link-underline link-underline-opacity-0"} to={'/my-bookings'}>My Bookings</NavLink>
                                </Nav>
                                <Form className="d-flex mt-4">
                                    <Form.Control
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                    <Button variant="outline-success">Search</Button>
                                </Form>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
};

export default NavBar;