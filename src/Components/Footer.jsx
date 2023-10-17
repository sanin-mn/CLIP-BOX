import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
    return (
        <div className='d-flex flex-column align-items-center justify-content-around' style={{ width: '100%', height: '400px', backgroundColor: 'rgb(86, 86, 86)' }}>
            <div className="footer d-flex justify-content-evenly w-100">
                <div className="wesite">
                    <h4>
                        <i className="fa-solid fa-cloud-arrow-up fa-bounce" style={{ color: 'black' }}></i>{' '}
                        Video App
                    </h4>
                    <p style={{ color: '#303030' }}>Lorem ipsum dolor sit ametb <br /> consectetur adipisicing elit. <br /> Odio consectetur tempora maiores dolore.</p>
                </div>
                <div className="links d-flex flex-column">
                    <h4>Links</h4>
                    <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>Landing Page</Link>
                    <Link to={'/home'} style={{ textDecoration: 'none', color: 'white' }}>Home Page</Link>
                    <Link to={'/watch-history'} style={{ textDecoration: 'none', color: 'white' }}>History</Link>
                </div>
                <div className="guides d-flex flex-column">
                    <h4>Guides</h4>
                    <a href="" style={{ textDecoration: 'none', color: 'white' }}>React</a>
                    <a href="" style={{ textDecoration: 'none', color: 'white' }}>Bootstrap</a>
                    <a href="" style={{ textDecoration: 'none', color: 'white' }}>Node</a>
                </div>
            </div>
            <p style={{ color: 'black' }} className='text-end'>copy ® 2023 media player .Built with React.</p>
        </div>
    )
}

export default Footer