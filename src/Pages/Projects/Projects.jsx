import React from 'react';
import image from '../../assets/profile.jpg';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div>
            <h2 className='text-3xl font-bold text-center m-5'>Projects Section</h2>
          <div className='md:flex m-5 items-center justify-between'>
          <div className="card w-96 bg-base-100 shadow-xl hover:scale-105 duration-500 rounded-lg">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-between">
                        <button className="btn btn-primary"><a href="">Live Link</a></button>
                        <button className="btn btn-primary"><a href="">Code Link</a></button>
                        
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl hover:scale-105 duration-500 rounded-lg">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-between">
                    <button className="btn btn-primary"><a href="">Live Link</a></button>
                        <button className="btn btn-primary"><a href="">Code Link</a></button>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl hover:scale-105 duration-500 rounded-lg">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-between">
                    <button className="btn btn-primary"><a href="">Live Link</a></button>
                        <button className="btn btn-primary"><a href="">Code Link</a></button>
                    </div>
                </div>
            </div>
          </div>
        </div>
    );
};

export default Projects;