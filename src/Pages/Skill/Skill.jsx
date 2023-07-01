import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";


const Skill = () => {
    
        const mainDiv = {
           width: "100%",
           margin:'5px',
           
        };
    
    return (
        
        
        <div style = {mainDiv}>
            <h2 className='text-4xl font-bold text-center'>Skill Section</h2>
         <h3>
            {" "}
           
         </h3>
         <h2 className='text-2xl font-bold'>HTML</h2>
         <ProgressBar completed = {90} bgColor = "grey" animateOnRender = {true} />
         
         <h2 className='text-2xl font-bold'>CSS</h2>
         <ProgressBar completed = {85} bgColor = "green" animateOnRender = {true}  />
         <h2 className='text-2xl font-bold'>JavaScript</h2>
         <ProgressBar completed = {70} bgColor = "red" animateOnRender = {true}  />
         <h2 className='text-2xl font-bold'>React JS</h2>
         <ProgressBar completed = {70} bgColor = "black" animateOnRender = {true} />
         <h2 className='text-2xl font-bold'>Node JS</h2>
         <ProgressBar completed = {65} bgColor='grey' animateOnRender = {true} />
         <h2 className='text-2xl font-bold'>MongoDB</h2>
         <ProgressBar completed = {75} bgColor='green' animateOnRender = {true} />
         <h2 className='text-2xl font-bold'>My SQL</h2>
         <ProgressBar completed = {65} bgColor='red' animateOnRender = {true} />
         <h2 className='text-2xl font-bold'>Express JS</h2>
         <ProgressBar completed = {65} bgColor='black' animateOnRender = {true} />
      </div>
   );
};
    


export default Skill;