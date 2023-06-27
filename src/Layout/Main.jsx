import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import NabBar from '../NabBar/NabBar';
import Header from './Header/Header';

const Main = () => {
    return (
        <div>
            <NabBar></NabBar>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;