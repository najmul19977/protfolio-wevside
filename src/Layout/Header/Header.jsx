import React, { useEffect } from 'react';
import image from '../../assets/profile.jpg'
import { FaFacebookSquare, FaGithubSquare, FaLinkedin, FaEnvelope, FaArrowAltCircleDown } from 'react-icons/fa';
import Marquee from "react-fast-marquee";
import Typewriter from "typewriter-effect";
import protfolio from '../../assets/protfolio-pic2.jpg';
import pic from '../../assets/portfolio-pic1.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
    useEffect(() => {
        AOS.init({duration:2000});
      }, []);

    return (
        <div>
            <Marquee className='bg-black text-gray-300 h-10 ' >
                Welcome to My Protfolio Website.I am Najmul Kabir.I am Front-End Developer and Professional Coder.   
            </Marquee>
            <div className="hero min-h-auto w-full bg-base-200">

                <div className="hero-content flex-col lg:flex-row-reverse mx-auto">
                    <div className="flex justify-center items-center" data-aos="fade-up">
                        <img src={pic} className="rounded-full shadow-2xl w-64 h-64 lg:h-auto lg:max-w-xs object-cover" alt="Profile Picture" />
                    </div>
                    <div data-aos="fade-down">
                        <h1 className="text-3xl font-bold mt-10">Hello, I am</h1>
                        <h1 className="text-5xl font-bold text-primary mt-2 mb-2">Najmul Kabir</h1>
                        <h1 className="text-3xl font-bold ">
                            <span>
                                <Typewriter
                                    onInit={(typewriter) => {
                                        typewriter
                                            .typeString("Welcome My Website.")
                                            .pauseFor(2000)
                                            .deleteAll()
                                            .typeString("I am Front-End Developer.")
                                            .pauseFor(1000)
                                            .deleteAll()
                                            .typeString("I am Professional Coder.")
                                            .start();
                                    }}
                                />
                            </span>
                        </h1>
                        <p className="py-6 text-justify mr-6">I have completed my graduation in the CSE department and also completed my web development course from programming hero. It was a six-month journey.I have learned some Technology and I have also completed some front-end and full-stack projects.I am a very hardworking and honest person. I am always still on my way.</p>
                        <div className='flex text-4xl mb-2 mt-2 gap-4' data-aos="fade-up">
                            <a href="https://web.facebook.com/najmul.kabir.14/" target='_blank' rel="noopener noreferrer"><FaFacebookSquare /></a>
                            <a href="https://github.com/najmul19977" target='_blank' rel="noopener noreferrer"><FaGithubSquare /></a>
                            <a href="https://www.linkedin.com/in/najmul-kabir-a3b77a23a/" target='_blank' rel="noopener noreferrer"><FaLinkedin /></a>
                            <a href="mailto:najmulkabir19977@gmail.com" rel="noopener noreferrer"><FaEnvelope /></a>
                        </div>
                        <button className="btn btn-primary shadow-md hover:scale-105 duration-500 rounded-lg mt-5">
                            <a className='flex gap-2' href="resume.pdf" download>
                                Download Resume
                                <FaArrowAltCircleDown />
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
