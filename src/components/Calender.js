import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Calender = () => {
    const [selected, setSelected] = useState(new Date());
    return (
        
        <div className='bg-violet-300 py-16'>
            <div className='flex justify-center'>
            <DayPicker mode="single"
                selected={selected}
                onSelect={setSelected} />
            </div>
           
        </div>
    );
};

export default Calender;