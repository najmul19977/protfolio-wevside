
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import NabBar from '../NabBar/NabBar';


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