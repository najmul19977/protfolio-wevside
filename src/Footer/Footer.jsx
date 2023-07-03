import React from 'react';
import { FaEnvelope, FaFacebookSquare, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-neutral text-neutral-content">
                <div className='text-3xl'>
                   
                    <p>Najmul Kabir.<br />Font-End Developer</p>
                </div>
                <div>
                    <span className="footer-title">Social</span>
                    <div className="grid grid-flow-col gap-4 text-4xl">
                    <a href="https://web.facebook.com/najmul.kabir.14/" target='blank' rel="noopener noreferrer"><FaFacebookSquare></FaFacebookSquare></a>
                    <a href="https://www.linkedin.com/in/najmul-kabir-a3b77a23a/" target='blank' rel="noopener noreferrer"><FaLinkedin></FaLinkedin></a>
                    <a href="https://www.najmulkabir19977@gmail.com" target='blank' rel="noopener noreferrer"><FaEnvelope></FaEnvelope></a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;