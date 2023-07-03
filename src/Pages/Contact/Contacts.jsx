import React from 'react';

const Contacts = () => {
    return (
        <div >
            <h2 className='text-4xl font-bold text-center m-5'>Contact Me</h2>
            <div className='w-full bg-black text-white mx-auto '>
                <div>
                    <form action="https://getform.io/f/b2963c1e-1151-436e-bf02-25d22774d77e" method='POST' className='flex flex-col w-full justify-center   mx-auto'>
                    <input type="text" name='name' placeholder="Enter Your Name" className="input input-bordered w-full max-w-xs justify-center mx-auto mb-2 mt-5 text-gray-500 " />
                    <input type="text" name='email' placeholder="Enter Your Email" className="input input-bordered w-full max-w-xs justify-center mx-auto mb-2 text-gray-500 " />
                    <textarea name="message" cols="30" rows="10" placeholder='Enter Your Message' className=" w-full max-w-xs justify-center mx-auto mb-2 text-gray-500 p-4"></textarea>
                    <button className='btn btn-primary w-full max-w-xs justify-center mx-auto mb-5'>Let's talk</button>
                    </form>
                </div>
            </div>
           
        </div>
    );
};

export default Contacts;