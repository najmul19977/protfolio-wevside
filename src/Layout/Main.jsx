
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import NabBar from '../NabBar/NabBar';


import Home from '../Pages/Home/Home';
import About from '../Pages/About';
import Header from './Header/Header';



const Main = () => {
    return (
        <div>
            <NabBar></NabBar>
         
             <Outlet></Outlet>
             
            <Footer></Footer>
        </div>
    );
};

export default Main;