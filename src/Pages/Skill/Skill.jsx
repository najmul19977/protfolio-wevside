import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";
import Marquee from "react-fast-marquee";
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import mongo from '../../assets/mongo.png';
import mysql from '../../assets/mysql.png';
import boot from '../../assets/bootstrap.jpg';
import tailwind from '../../assets/tailwind.png';
import react from '../../assets/react.png';
import node from '../../assets/Node.png';
import js from '../../assets/js.png';
import ex from '../../assets/ex.png';
import github from '../../assets/github.png';




const Skill = () => {

   const mainDiv = {
      /* width: "50%", */
      padding: '5px',
      


   };

   return (


      <div className=''>
         <h2 className='text-4xl font-bold text-center mt-5 mb-5 border-2 border-t-0 w-1/4 mx-auto border-b-indigo-500'>Skill Section</h2>
         <Marquee className='bg-base-200'>
            I <div className='flex w-10 h-10 mx-auto  m-5 gap-4'>
               <img src={html} alt="" />
               <img src={css} alt="" />
               <img src={boot} alt="" />
               <img src={tailwind} alt="" />
               <img src={js} alt="" />
               <img className='' src={react} alt="" />
               <img src={node} alt="" />
               <img className='' src={ex} alt="" />
               <img src={mongo} alt="" />
               <img src={mysql} alt="" />
               <img src={github} alt="" />






            </div>
         </Marquee>
         <div className='grid md:grid-cols-2 gap-10 bg-base-200 w-full p-5'>
            <div style={mainDiv}>



               <h3>
                  {" "}

               </h3>
               <h2 className='text-xl font-bold mb-2'>HTML</h2>
               <ProgressBar completed={90} bgColor="grey" animateOnRender={true} />

               <h2 className='text-xl mt-2 font-bold mb-2'>CSS</h2>
               <ProgressBar completed={85} bgColor="green" animateOnRender={true} />
               <h2 className='text-xl mt-2 mb-2 font-bold'>Bootstrap</h2>
               <ProgressBar completed={85} bgColor="red" animateOnRender={true} />
               <h2 className='text-xl mb-2 mt-2 font-bold'>Tailwind</h2>
               <ProgressBar completed={85} bgColor="black" animateOnRender={true} />
               <h2 className='text-xl mb-2 mt-2 font-bold'>JavaScript</h2>
               <ProgressBar completed={70} bgColor="grey" animateOnRender={true} />
               <h2 className='text-xl mb-2 mt-2 font-bold'>React JS</h2>
               <ProgressBar completed={70} bgColor="green" animateOnRender={true} />
               <h2 className='text-xl mb-2 mt-2 font-bold'>Node JS</h2>
               <ProgressBar completed={65} bgColor='red' animateOnRender={true} />
               <h2 className='text-xl mb-2 mt-2 font-bold'>MongoDB</h2>
               <ProgressBar completed={75} bgColor='black' animateOnRender={true} />
               <h2 className='text-xl mb-2 mt-2 font-bold'>My SQL</h2>
               <ProgressBar completed={65} bgColor='grey' animateOnRender={true} />
               <h2 className='text-xl mb-2 mt-2 font-bold'>Express JS</h2>
               <ProgressBar completed={65} bgColor='green' animateOnRender={true} />
               <h2 className='text-xl mb-2 mt-2 font-bold'>GitHub</h2>
               <ProgressBar completed={75} bgColor='red' animateOnRender={true} />

            </div>
            <div className='  grid grid-cols-3  justify-between gap-5  p-10 bg-black border-4 border-indigo-500'>
               
                  <div className='flex flex-col justify-center items-center shadow-md hover:scale-105 duration-500 rounded-lg border-2  border-b-indigo-500 border-t-0 '>
                     <img className='w-20 mx-auto' src={html} alt="" />
                     <p className='mt-4 text-gray-300 font-semibold'>HTML</p>
                     
                  </div>
                  <div className='flex flex-col justify-center items-center shadow-md hover:scale-105 duration-500 rounded-lg border-2  border-b-indigo-500 border-t-0 '>
                     <img className='w-20 mx-auto' src={css} alt="" />
                     <p className='mt-4 text-gray-300 font-semibold'>CSS</p>
                   
                  </div>
                  <div className='flex flex-col justify-center items-center shadow-md hover:scale-105 duration-500 rounded-lg border-2  border-b-indigo-500 border-t-0'>
                     <img className='w-20 mx-auto' src={boot} alt="" />
                     <p className='mt-4 text-gray-300 font-semibold'>Bootstrap</p>
                  </div>
                  <div className='flex flex-col justify-center items-center shadow-md hover:scale-105 duration-500 rounded-lg border-2  border-b-indigo-500 border-t-0 '>
                     <img className='w-20 mx-auto' src={tailwind} alt="" />
                     <p className='mt-4 text-gray-300 font-semibold'>Tailwind</p>
                  </div>
                  <div className='flex flex-col justify-center items-center shadow-md hover:scale-105 duration-500 rounded-lg border-2  border-b-indigo-500 border-t-0'>
                     <img className='w-20 mx-auto' src={js} alt="" />
                     <p className='mt-4 text-gray-300 font-semibold'>JavaScript</p>
                  </div>
                  <div className='flex flex-col justify-center items-center shadow-md hover:scale-105 duration-500 rounded-lg border-2  border-b-indigo-500 border-t-0'>
                     <img className='w-20 mx-auto' src={react} alt="" />
                     <p className='mt-4 text-gray-300 font-semibold'>React JS</p>
                  </div>
                  <div className='flex flex-col justify-center items-center shadow-md hover:scale-105 duration-500 rounded-lg border-2  border-b-indigo-500 border-t-0 '>
                     <img className='w-20 mx-auto' src={node} alt="" />
                     <p className='mt-4 text-gray-300 font-semibold'>Node JS</p>
                  </div>
                  <div className='flex flex-col justify-center items-center shadow-md hover:scale-105 duration-500 rounded-lg border-2  border-b-indigo-500 border-t-0'>
                     <img className='w-20 mx-auto' src={ex} alt="" />
                     <p className='mt-4 text-gray-300 font-semibold'>Express JS</p>
                  </div>
                  <div className='flex flex-col justify-center items-center shadow-md hover:scale-105 duration-500 rounded-lg border-2  border-b-indigo-500 border-t-0'>
                     <img className='w-20 mx-auto' src={mongo} alt="" />
                     <p className='mt-4 text-gray-300 font-semibold'>MongoDB</p>
                  </div>
                  <div className='flex flex-col justify-center items-center shadow-md hover:scale-105 duration-500 rounded-lg border-2  border-b-indigo-500 border-t-0 '>
                     <img className='w-20 mx-auto' src={mysql} alt="" />
                     <p className='mt-4 text-gray-300 font-semibold'>Mysql</p>
                  </div>
                  <div className='flex flex-col justify-center items-center shadow-md hover:scale-105 duration-500 rounded-lg border-2  border-b-indigo-500 border-t-0'>
                     <img className='w-20 mx-auto' src={github} alt="" />
                     <p className='mt-4 text-gray-300 font-semibold'>GitHub</p>
                  </div>
               
            </div>
         </div>


      </div>
   );
};



export default Skill;