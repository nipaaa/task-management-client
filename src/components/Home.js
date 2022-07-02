import React, { useEffect, useState } from 'react';

const Home = () => {

    const [tasks, setTasks] = useState([]);

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



    useEffect(() => {
        const url = 'http://localhost:5000/task';
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setTasks(data);
            })
    }
        , [tasks])

    return (
        <div className='bg-violet-300  py-12 '>
            <div className='text-center'>
                <h1 className='text-violet-900 text-3xl'>Add Your task Here</h1> <br />
                <form onSubmit={handleTask}>
                    <input type="text" placeholder="Type here and press enter button" name='task' class="input input-bordered input-primary w-full max-w-xs" />
                    <input className='bg-violet-900 text-white p-3 border rounded-lg' type="submit" value="Submit" />
                </form>

            </div>

            <div className='w-1/2 mx-auto p-6 border my-12'>
            <p className='text-violet-900 text-2xl'>To-do List</p>     <hr />
                {
                    tasks.map(i=> <li key={i._id}>{i.task}</li>)
                }
               
           
            
            </div>

        </div>
    );
};

export default Home;