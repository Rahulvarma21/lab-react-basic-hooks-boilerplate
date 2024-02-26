import { useState, useEffect } from 'react';

function Progression5() {
    const [age, setAge] = useState(19);
    const [sibling, setSibling] = useState(3);


    useEffect(
        function () {
            if (age > 19) {
                alert('Something Change ' + age);
            }
        },
        [age]
    );

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>My Age is {age}</h1>
            <h3>My sibllings {sibling}</h3>
            <button
                onClick={() => {
                    setAge((age) => age + 1);
                }}
            >
                INC age
            </button>
            <button onClick={() => setSibling((sibling) => sibling + 1)}>
                Sib INC
            </button>
        </div>
    );

}

export default Progression5