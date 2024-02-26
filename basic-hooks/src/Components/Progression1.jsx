import { useState } from "react"

function Progression1() {
    const [age, setAge] = useState(19)

    const handleChange = () => {
        setAge(age + 1)
    }
    return (
        <div style={{
            textAlign: "center"
        }} >
            <h1>My age is {age}</h1>

            <button onClick={handleChange}>Get Older</button>
        </div>
    )
}

export default Progression1