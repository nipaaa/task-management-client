import axios from 'axios';
import React, { useState } from 'react';

const UpdateModal = ({ task, setTask }) => {
    const { desc, _id } = task;
    const [updateTaskValue, setUpdateTaskValue] = useState('');

    const handleUpdateTask = async () => {
        const { data } = await axios.put(`https://friendly-smarties-62853.herokuapp.com/task/${_id}`, { desc: updateTaskValue });
        console.log(data)
        setTask(null);
    }


    return (
        <div>
            <input type="checkbox" id="updateTaskModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="updateTaskModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <h2 className='text-3xl font-bold text-indigo-600 mb-5'>Update Your Task!</h2>
                    <input name='updateTask' type="text" onChange={(event) => setUpdateTaskValue(event.target.value)} placeholder={desc} className="input input-bordered border-indigo-600 w-full max-w-xs text-lg text-black" />
                    <button onClick={handleUpdateTask} className='btn  btn-primary block mt-5 hover:btn-outline '>Update Task </button>

                </div>
            </div>
        </div>
    );
};

export default UpdateModal;

