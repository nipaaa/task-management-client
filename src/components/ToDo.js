import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UpdateModal from './UpdateModal';

const ToDo = () => {
    const [tasks, setTasks] = useState([]);
    const [toolTip, setToolTip] = useState(false);
    const [completion, setCompletion] = useState(false);

    useEffect(() => {
        const url = 'https://friendly-smarties-62853.herokuapp.com/task';
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setTasks(data);
            })

    }
        , []);

        const handleCompletion = async(id) =>{
            const {data} = await axios.put(`https://friendly-smarties-62853.herokuapp.com/task/${id}`, {
                checked: completion ? 'yes' : 'no'
            })
        }



    return (
        <div className='bg-violet-300 py-16'>
            <h1 className='text-center text-violet-900 text-3xl pb-8'>Added Task</h1>
            <div className='border w-2/5 mx-auto p-12'>
                <div>
                    <div class="">

                        {
                            tasks.map(item => <div>
                                <div className='flex justify-between items-center my-4'>
                                    <div className='flex items-center'>
                                        <input type="checkbox" class="checkbox checkbox-primary mr-6"
                                            onClick={() => {
                                                setCompletion(!completion);
                                                handleCompletion(item._id);
                                            }}
                                            // checked=
                                        />
                                        <span key={item._id} class="label-text">{item.task}</span>
                                    </div>

                                    <i onClick={() => {
                                        setTasks(tasks);
                                        setToolTip(!toolTip);
                                    }} class="fa-solid fa-pen-to-square text-violet-900"
                                        style={{ position: "relative" }}
                                    >
                                        {
                                            toolTip
                                            &&
                                            <p
                                                style={{
                                                    position: "absolute",
                                                    top: '100%',
                                                    right: '0',
                                                    width: "10rem",
                                                    backgroundColor: "purple",
                                                    color: "white",
                                                    padding: '.5em 0',
                                                }}
                                            >
                                                <input type="text" name="title" id="" />
                                            </p>
                                        }
                                    </i>
                                </div>
                            </div>
                            )
                        }

                    </div>
                </div>
            </div>
            {tasks && <UpdateModal task={tasks} setTask={setTasks}></UpdateModal>}
        </div>
    );
};

export default ToDo;