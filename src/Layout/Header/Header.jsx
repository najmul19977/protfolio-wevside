import React from 'react';
import image from '../../assets/profile.jpg'
import { FaFacebookSquare, FaGithubSquare, FaLinkedin, FaEnvelope, FaArrowAltCircleDown } from 'react-icons/fa';
import Marquee from "react-fast-marquee";
import Typewriter from "typewriter-effect";

const Header = () => {

    return (
        <div>
            <Marquee className='bg-black text-gray-300 h-10 ' >
                Welcome to My Protfolio Website.I am Najmul Kabir.I am Front-End Developer and Professional Coder.   
            </Marquee>
            <div className="hero min-h-screen w-full bg-base-200">

                <div className="hero-content flex-col lg:flex-row-reverse mx-auto">

                    <img src={image} className="max-w-lg rounded-full shadow-2xl mx-4 hover:scale-105 duration-500" />
                    <div>
                        <h1 className="text-3xl font-bold">Hello,I am</h1>
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
                        <div className='flex text-4xl mb-4 gap-4'>

                            <a href="https://web.facebook.com/najmul.kabir.14/" target='blank' rel="noopener noreferrer"><FaFacebookSquare></FaFacebookSquare></a>
                            <a href="https://github.com/najmul19977" target='blank' rel="noopener noreferrer"><FaGithubSquare></FaGithubSquare></a>
                            <a href="https://www.linkedin.com/in/najmul-kabir-a3b77a23a/" target='blank' rel="noopener noreferrer"><FaLinkedin></FaLinkedin></a>
                            <a href="https://www.najmulkabir19977@gmail.com" target='blank' rel="noopener noreferrer"><FaEnvelope></FaEnvelope></a>




                        </div>
                        <button className="btn btn-primary shadow-md hover:scale-105 duration-500 rounded-lg"><a className='flex gap-2' href="resume.pdf" download={true} target='blank'>Download Resume<FaArrowAltCircleDown></FaArrowAltCircleDown></a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;