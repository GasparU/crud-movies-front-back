import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import GenresModal from './Genres/GenresModal';

const NavBar = () => {
    const [theme, setTheme] = useState()
    const darkMode = () => {
        setTheme(!theme)
    }

    const [showGenres, setShowGenres] = useState(false);

    return (
        <>
            <Navbar variant="dark" expand="md" className='navbar-edit '>
                <Container className='container-edit'>
                    <Navbar.Brand as={Link} to="/">Movies App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Movies</Nav.Link>
                            <Nav.Link as={Link} to="/actors">Actors</Nav.Link>
                            <Nav.Link as={Link} to="/directors">Directors</Nav.Link>
                            <Nav.Link onClick={() => setShowGenres(true)}>Genres</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <GenresModal
                show={showGenres}
                handleClose={() => setShowGenres(false)}
            />
        </>
    );
};

export default NavBar;