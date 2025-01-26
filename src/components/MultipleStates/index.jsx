import React, { useState } from 'react';

const MultipleStates = () =>{

    const [name, setName] = useState('Gagan');
    const [age, setAge] = useState(30);

    return(
        <div className='multiple_states'>
            <p>Name:{name}</p>
            <p>Age:{age}</p>
            <button onClick={(e)=>setName('Jatin')}>Change Name</button>
            <button onClick={(e)=>setAge(age + 1)}>Increment Age</button>
        </div>
    )
}

export default MultipleStates;