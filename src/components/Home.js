import React from 'react';

const Home = () => {

    const handleTask = event => {

        event.preventDefault();

        const task = event.target.task.value;
        const item = {
            task: task,
        }

        const url = 'http://localhost:5000/task';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },

            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('The task has been added successfully!')
                }
            })
        event.target.reset();
    }

    return (
        <div className='bg-violet-300  py-12 '>
            <div className='text-center'>
                <h1 className='text-violet-900 text-3xl'>Add Your task Here</h1> <br />
                <form onClick={handleTask}>
                <input type="text" placeholder="Type here and press enter button" name='task' class="input input-bordered input-primary w-full max-w-xs" />
                </form>
           
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