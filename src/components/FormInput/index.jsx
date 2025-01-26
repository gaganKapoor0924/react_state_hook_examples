import React, { useState } from 'react';
import './style.scss';

const FormInput = () =>{

    const [name, setName] = useState('');

    return(
        <div className='form_input'>
            <label>Name</label>
            <input type="text" placeholder='Enter Name' onChange={(e)=>setName(e?.target?.value)}/>
            <p>{name}</p>
        </div>
    )
}

export default FormInput;