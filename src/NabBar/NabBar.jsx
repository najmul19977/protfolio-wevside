import React from 'react';
import { Link } from 'react-router-dom';

const NabBar = () => {
    return (
        <div className='sticky top-0 z-10 w-full'>
            <div className="navbar bg-base-200">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 uppercase text-xl ">

                            <li> <Link className='hover:font-bold duration-500 ' to='/'>Home</Link></li>
                            <li> <Link className='hover:font-bold duration-500 ' to='/about'>About Me</Link></li>
                            <li> <Link className='hover:font-bold duration-500' to='/projects'>My Projects</Link></li>
                            <li> <Link className='hover:font-bold duration-500' to='/skill'>My Skill</Link></li>
                            <li> <Link className='hover:font-bold ' to='/contact'>Contact Me</Link></li>

                        </ul>
                    </div>
                    <a className="btn btn-ghost hover:bg-black normal-case text-xl text-primary font-bold">Najmul Kabir</a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 uppercase">
                        <li> <Link className='hover:font-bold duration-500 ' to='/'>Home</Link></li>
                        <li> <Link className='hover:font-bold duration-500' to='/about'>About Me</Link></li>
                        <li> <Link className='hover:font-bold duration-500' to='/projects'>My Projects</Link></li>
                        <li> <Link className='hover:font-bold duration-500' to='/skill'>My Skill</Link></li>
                        <li> <Link className='hover:font-bold duration-500' to='/contact'>Contact Me</Link></li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default NabBar;