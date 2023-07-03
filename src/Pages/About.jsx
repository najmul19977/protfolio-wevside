import React, { useState } from 'react';
import image from '../assets/profile.jpg';
import image1 from '../assets/portfolio-pic1.jpg';
import image2 from '../assets/protfolio-pic2.jpg';
import style from './about.css';

const About = () => {
  const [colleps, setcolleps] = useState(false);

  return (
    <div className=''>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row gap-5">
          <img
            src={image2}
            className=" w-full h-auto max-w-xs rounded-lg shadow-2xl mx-4 hover:scale-105 duration-500"
            alt="Profile"
          />
          <div>
            <h1 className="text-5xl font-bold mb-5">About Me!</h1>
            <p>
              I have completed my graduation degree in the CSE department at
              College of Business Science & Technology (CBST), Mymensingh.
              <span
                className={`long-text ${colleps ? "expanded" : ""}`}
              >
                I have gained a deep understanding of ReactJS, NodeJs, Rest
                API, Javascript, HTML, CSS, Bootstrap, Tailwind, MongoDB,
                MySQL, Firebase Authentication by building a user-friendly,
                responsive web application. I continuously explore new
                technologies to enhance my skills. I am confident in ensuring
                the highest level of professionalism and commitment to my job.
              </span>
            </p>
            <button
              onClick={() => setcolleps((prev) => !prev)}
              className="btn btn-primary shadow-md hover:scale-105 duration-500 rounded-lg"
            >
              See More...
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
