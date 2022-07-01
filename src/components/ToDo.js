import React, { useEffect, useState } from 'react';

const ToDo = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const url = 'http://localhost:5000/task';
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setTasks(data);
            })

    }
        , [])



    return (
        <div className='bg-violet-300 py-16'>
            <h1 className='text-center text-violet-900 text-3xl pb-8'>Added Task</h1>
            <div className='border w-2/5 mx-auto p-12'>
                <div class="form-control">
                    <label class="">

                        {
                            tasks.map(item => <div>
                                <div className='flex items-center my-4'>
                                    <input type="checkbox" class="checkbox checkbox-primary mr-6" />
                                    <span key={item._id} class="label-text">{item.task}</span>
                                </div>
                            </div>
                            )
                        }

                    </label>
                </div>
            </div>
        </div>
    );
};

export default ToDo;