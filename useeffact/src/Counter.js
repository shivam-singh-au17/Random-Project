import React, { useState } from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(second);
    return <div>
        <h1>{counter}</h1>
    </div>;
};

export default Counter;
