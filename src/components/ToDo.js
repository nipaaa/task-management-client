import React from 'react';

const ToDo = () => {
    return (
        <div className='bg-violet-300 py-16'>
            <h1 className='text-center text-violet-900 text-3xl pb-8'>Completed Task</h1>
            <div className='border w-2/5 mx-auto p-12'>
                <div class="form-control">
                    <label class="label cursor-pointer">
                        <input type="checkbox" class="checkbox checkbox-primary" />
                        <span class="label-text">Remember me</span>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default ToDo;