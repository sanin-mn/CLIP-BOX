import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Header() {
    return (
        <Navbar className="bg-warning">
            <Container>
                <Navbar.Brand className='fw-bold fs-4' >
                   <Link to={'/'} style={{textDecoration:'none',color:'white'}}>
                        <i className="fa-solid fa-cloud-arrow-up fa-bounce" style={{ color: 'black' }}></i>{' '}
                        Video App
                   </Link>
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Header