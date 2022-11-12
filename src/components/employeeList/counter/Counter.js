import React, { useState } from 'react'

export default function Counter() {
    const [number, setNumber] = useState(0);
    const handleIncrease = () =>{
        setNumber(number+1); 
        console.log("Increase",number)

    }

    const handleDecrease = () =>{
        setNumber(number+-1);
        
        console.log("Decrease",number)
    }
    return (
        <div>{number}
        <p>
            
            <button onClick={handleIncrease}>Increase +</button>
            <button onClick={handleDecrease}>Decrease -</button>
        </p>
        </div>
    )
}
