import React, { useState } from 'react';
import './style.scss';

const BasicCounter = () =>{

    const [count, setCount] = useState(0);

    const handleIncrement = () =>{
        setCount(count + 1);
    }

    return(
        <div className='basic_counter'>
            <span>{count}</span>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    )
}

export default BasicCounter;