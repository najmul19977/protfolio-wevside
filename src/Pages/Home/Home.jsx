



import Footer from '../../Footer/Footer';
import Header from '../../Layout/Header/Header';
import NabBar from '../../NabBar/NabBar';


import About from '../About';
import Contacts from '../Contact/Contacts';
import Projects from '../Projects/Projects';
import Skill from '../Skill/Skill';


const Home = () => {
    return (
        <div>
           
           <Header></Header>
            <About></About>
            <Projects></Projects>
            <Skill></Skill>
            <Contacts></Contacts>
            
            
          
            
            
        </div>
    );
};

export default Home;