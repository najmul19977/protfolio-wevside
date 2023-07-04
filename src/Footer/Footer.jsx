import React, { useEffect } from 'react';
import { FaEnvelope, FaFacebookSquare, FaLinkedin } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
    useEffect(() => {
        AOS.init({duration:2000});
      }, []);
    return (
        <div>
            <footer className="grid md:grid-cols-1 items-center footer p-10 bg-neutral text-neutral-content">
                <div className='text-2xl font-bold' data-aos="fade-right">
                   
                    <p>Najmul Kabir.<br />Font-End Developer <br />Mymensingh,Bangladesh</p>
                </div>
                <div data-aos="fade-left">
                    <span className="footer-title">Social</span>
                    <div className="grid grid-flow-col gap-4 text-4xl">
                    <a href="https://web.facebook.com/najmul.kabir.14/" target='_blank' rel="noopener noreferrer"><FaFacebookSquare></FaFacebookSquare></a>
                    <a href="https://www.linkedin.com/in/najmul-kabir-a3b77a23a/" target='_blank' rel="noopener noreferrer"><FaLinkedin></FaLinkedin></a>
                    <a href="https://www.najmulkabir19977@gmail.com" target='_blank' rel="noopener noreferrer"><FaEnvelope></FaEnvelope></a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;