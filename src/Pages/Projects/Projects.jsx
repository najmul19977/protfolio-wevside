import React, { useEffect } from 'react';
import image from '../../assets/profile.jpg';
import { Link } from 'react-router-dom';
import project1 from '../../assets/projcct1.png';
import project2 from '../../assets/project2.png';
import project3 from '../../assets/project3.png';
import project4 from '../../assets/project4.png';
import project5 from '../../assets/projects5.png';
import project6 from '../../assets/projects6.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
  useEffect(() => {
    AOS.init({duration:2000});
  }, []);
  return (
    <div>
      <h2 className='text-3xl font-bold text-center m-5 border-2 border-t-0 lg:w-1/4 md:w-full ml-5 mr-5  lg:mx-auto border-b-indigo-500 mt-5 mb-5'data-aos="fade-down">
        Projects Section
      </h2>
      <div className='grid lg:grid-cols-3 md:grid-cols-1 m-5 items-center justify-between bg-base-200 p-5 gap-5'>
        <div   className="card p-5 w-full md:w-96 bg-base-100 shadow-xl hover:scale-105 duration-500 rounded-lg" data-aos="fade-up">
          <figure><img src={project1} alt="" /></figure>
          <div className="card-body">
            <h2 className="card-title">Name Of My Project Chef Hunter</h2>

            <div className="grid grid-cols-3 items-center justify-around gap-2">
              <button className="btn btn-primary flex-shrink-0">
                <a href="https://chef-recipe-hunter-946cf.web.app/" target='blank'>Live Link</a>
              </button>
              <button className="btn btn-primary flex-shrink-0">
                <a href="https://github.com/programming-hero-web-course-4/b7a10-chef-recipe-hunter-server-side-najmul19977" target='blank'>Server Link</a>
              </button>
              <button className="btn btn-primary flex-shrink-0">
                <a href="https://github.com/programming-hero-web-course-4/b7a10-chef-recipe-hunter-client-side-najmul19977" target='blank'>Client Link</a>
              </button>
            </div>
          </div>
        </div>
        <div className="card p-5 w-full md:w-96 bg-base-100 shadow-xl hover:scale-105 duration-500 rounded-lg"data-aos="fade-right">
          <figure><img src={project2} alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">Name of My Projects Toy MarketPlace</h2>

            <div className="grid grid-cols-3 items-center justify-around gap-2">
              <button className="btn btn-primary flex-shrink-0">
                <a href="https://toy-car-dd1ca.web.app/" target='blank'>Live Link</a>
              </button>
              <button className="btn btn-primary flex-shrink-0">
                <a href="https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-server-side-najmul19977" target='blank'>Server Link</a>
              </button>
              <button className="btn btn-primary flex-shrink-0">
                <a href="https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-client-side-najmul19977" target='blank'>Client Link</a>
              </button>
            </div>
          </div>
        </div>
        <div className="card p-5 w-full md:w-96 bg-base-100 shadow-xl hover:scale-105 duration-500 rounded-lg" data-aos="fade-left">
          <figure><img src={project3} alt="" /></figure>
          <div className="card-body">
            <h2 className="card-title">Name of My Project Summer Camp</h2>

            <div className="grid grid-cols-3 items-center justify-around gap-2">
              <button className="btn btn-primary flex-shrink-0">
                <a href="">Live Link</a>
              </button>
              <button className="btn btn-primary flex-shrink-0">
                <a href="https://github.com/programming-hero-web-course1/b7a12-summer-camp-server_side-najmul19977" target='blank'>Server Link</a>
              </button>
              <button className="btn btn-primary flex-shrink-0">
                <a href="https://github.com/programming-hero-web-course1/b712-summer-camp-client-side-najmul19977" target='blank'>Client Link</a>
              </button>
            </div>
          </div>
        </div>
        <div className="card p-5 w-full md:w-96 bg-base-100 shadow-xl hover:scale-105 duration-500 rounded-lg" data-aos="fade-right">
          <figure><img src={project4} alt="" /></figure>
          <div className="card-body">
            <h2 className="card-title">Name of My Project CareerHub</h2>

            <div className="grid grid-cols-2 items-center justify-around gap-2">
              <button className="btn btn-primary flex-shrink-0">
                <a href="https://eloquent-palmier-9491a1.netlify.app/" target='-blank'>Live Link</a>
              </button>
              
              <button className="btn btn-primary flex-shrink-0">
                <a href="https://github.com/Porgramming-Hero-web-course/b7a9-career-hub-najmul19977" target='-blank'>Github Link</a>
              </button>
            </div>
          </div>
        </div>
        <div className="card p-5 w-full md:w-96 bg-base-100 shadow-xl hover:scale-105 duration-500 rounded-lg" data-aos="fade-down" >
          <figure><img src={project5} alt="" /></figure>
          <div className="card-body">
            <h2 className="card-title">Name of My Project Knowledge Cafe </h2>

            <div className="grid grid-cols-2 items-center justify-around gap-2">
              <button className="btn btn-primary flex-shrink-0">
                <a href="https://boisterous-pavlova-1ce968.netlify.app/" target='blank'>Live Link</a>
              </button>
             
              <button className="btn btn-primary flex-shrink-0">
                <a href="https://github.com/Porgramming-Hero-web-course/b7a8-knowledge-cafe-najmul19977" target='blank'>Github Link</a>
              </button>
            </div>
          </div>
        </div>
        <div className="card p-5 w-full md:w-96 bg-base-100 shadow-xl hover:scale-105 duration-500 rounded-lg" data-aos="fade-left" >
          <figure><img src={project6} alt="" /></figure>
          <div className="card-body">
            <h2 className="card-title">Name of My Project G3-Architects</h2>

            <div className="grid grid-cols-2 items-center justify-around gap-2">
              <button className="btn btn-primary flex-shrink-0">
                <a href="https://najmul19977.github.io/G3-Architects/" target='blank'>Live Link</a>
              </button>
              
              <button className="btn btn-primary flex-shrink-0">
                <a href="https://github.com/najmul19977/G3-Architects" target='blank'>Github Link</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
