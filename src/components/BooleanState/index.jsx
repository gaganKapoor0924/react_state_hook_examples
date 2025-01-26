import React, { useState } from 'react';

const BooleanState = () =>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () =>{
        setIsLoggedIn(!isLoggedIn);
    }

    return(
        <div className='boolean_state'>
            {isLoggedIn ? "LogOut" : "Logged In"}
            <button onClick={handleLogin}>Click</button>
        </div>
    )

}

export default BooleanState;