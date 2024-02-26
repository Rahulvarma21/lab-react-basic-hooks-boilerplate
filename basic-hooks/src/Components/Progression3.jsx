import { useState } from 'react';

function Progression3() {

    const [data, setData] = useState({
        age: 20,
        siblings: 1,
    });

    const handleClick = (keyName) => {
        setData({ ...data, [keyName]: data[keyName] + 1 });
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>My age is : {data.age} </h1>

            <h1>My siblings:{data.siblings} </h1>

            <button onClick={() => handleClick('age')}>Get age</button>

            <button onClick={() => handleClick('siblings')}>Get Siblings</button>
        </div>
    );

}

export default Progression3