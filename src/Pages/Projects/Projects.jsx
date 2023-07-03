import React from 'react';
import image from '../../assets/profile.jpg';
import { Link } from 'react-router-dom';
import project1 from '../../assets/projcct1.png';
import project2 from '../../assets/project2.png';
import project3 from '../../assets/project3.png';

const Projects = () => {
  return (
    <div>
      <h2 className='text-3xl font-bold text-center m-5 border-2 border-t-0 w-1/4 mx-auto border-b-indigo-500 mt-5 mb-5'>
        Projects Section
      </h2>
      <div className='md:flex m-5 items-center justify-between bg-base-200 p-5'>
        <div className="card p-5 w-full md:w-96 bg-base-100 shadow-xl hover:scale-105 duration-500 rounded-lg">
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
        <div className="card p-5 w-full md:w-96 bg-base-100 shadow-xl hover:scale-105 duration-500 rounded-lg">
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
        <div className="card p-5 w-full md:w-96 bg-base-100 shadow-xl hover:scale-105 duration-500 rounded-lg">
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
      </div>
    </div>
  );
};

export default Projects;
