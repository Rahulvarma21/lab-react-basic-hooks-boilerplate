import { useState } from 'react';

function Progression4() {
    const [currAge, setAge] = useState(19);
    const [currSib, setSib] = useState(3);

    return (
        <div>

            <h3>My Current Age is {currAge}</h3>

            <h4>My siblings {currSib}</h4>
a
            <button onClick={() => setAge((currAge) => currAge + 1)}>age</button>

            <button onClick={() => setSib((currSib) => currSib + 1)}>sib</button>

        </div>
    );
}

export default Progression4