import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import NabBar from '../NabBar/NabBar';
import Header from './Header/Header';
import About from '../Pages/About';
import Projects from '../Pages/Projects/Projects';
import Skill from '../Pages/Skill/Skill';
import Home from '../Pages/Home/Home';


const Main = () => {
    return (
        <div>
            <NabBar></NabBar>
             <Home></Home>
            <Footer></Footer>
        </div>
    );
};

export default Main;