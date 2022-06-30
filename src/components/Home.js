import React from 'react';

const Home = () => {
    return (
        <div className='bg-violet-300  py-12 '>
            <div className='text-center'>
                <h1 className='text-violet-900 text-3xl'>Add Your task Here</h1> <br />
            <input type="text" placeholder="Type here and press enter button" class="input input-bordered input-primary w-full max-w-xs" />
            </div>

            <div className='w-1/2 mx-auto p-6 border my-12'>
                 <p className='text-violet-900 text-2xl'>To-do List</p> 
                <hr />
                <li></li>
            </div>
           
        </div>
    );
};

export default Home;