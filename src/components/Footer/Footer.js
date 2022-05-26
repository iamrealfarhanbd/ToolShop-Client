import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
    return (
        <>
            <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded ">
                <div className="grid grid-flow-col gap-4">
                    <li className='list-none'><Link to="/">Home</Link></li>
                    <li className='list-none'><Link to="/blog">Blog</Link></li>
                    <li className='list-none'><Link to="/Portfolio">Portfolio</Link></li>
                </div>
      
                <div>
                    <p>Copyright © 2022 - All right reserved by Farhan Ltd</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;