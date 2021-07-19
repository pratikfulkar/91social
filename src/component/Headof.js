import React from 'react'
import {Container,Nav,Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom'
const Headof = () => {
    return (
        <div>
            
             <Navbar collapseOnSelect expand="sm" bg="light" weight="100%" varient="light" >
                <Container>
                  
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
                    
                        <Nav className="me-auto">
                            <Nav.Link ><Link to="/">History</Link></Nav.Link>
                            <Nav.Link ><Link to='/Capsules'>Capsules</Link></Nav.Link>
                            <Nav.Link ><Link to='/Cores'>Cores</Link></Nav.Link>
                            <Nav.Link ><Link to='/Dragons'>Dragons</Link></Nav.Link>
                            <Nav.Link ><Link to='/Info'>Info</Link></Nav.Link>
                            <Nav.Link ><Link to='/LandingPads'>LandingPads</Link></Nav.Link>
                            <Nav.Link ><Link to='/PayLoads'>PayLoads</Link></Nav.Link>
                            <Nav.Link ><Link to='/Roadster'>Roadster</Link></Nav.Link>
                            <Nav.Link ><Link to='/Login'>Login</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )
}

export default Headof
