import React, { useState } from 'react';
import './style.scss'

const ToggleVisibility = () =>{

    const [show, setShow] = useState(false);

    const handleToggle = () =>{
        setShow(!show);
    }

    return(
        <div className='toggle_visibility'>
            {show && <p>React js is a javascript library that helps in creating complex UI</p>}
            <button onClick={handleToggle}>Click to View</button>
        </div>
    )
}

export default ToggleVisibility;