import React, { useState } from 'react';

const ArrayItems = () =>{

    const [items, setItems] = useState(["Apple", "Banana", "Grapes"]);

    const addItem = () =>{
        setItems([...items, "orange"]);
    }

    return(
        <div>
            <ul>
                {
                    items?.map((item, index)=>{
                        return(
                            <li key={index}>{item}</li>
                        )
                    })
                }
            </ul>
            <button onClick={addItem}>Add Item</button>
        </div>
    )
}

export default ArrayItems;