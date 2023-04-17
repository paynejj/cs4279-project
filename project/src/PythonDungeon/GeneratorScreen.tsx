  
import React from "react";
import CDButton from "../Components/CDButton";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { usePython } from 'react-py'

function GeneratorScreen() {

    let navigate = useNavigate();
    let input = "";

    const Back = () => {
        let path = `/`;
        navigate(path);
    }
    const {runPython, stdout, stderr, isLoading, isRunning } = usePython();
    const [name, setName] = useState('Hello');

    const handleClick = (e?) => {
        input = window.api.readPy("DungeonGenerator")
        e.preventDefault()
        runPython(input)
        window.api.writeLevel(JSON.parse(stdout))
        let readres = window.api.readLevel(name)
        console.log(readres)
    }
    
    return (
        <React.Fragment>
            {isLoading ? <p>Loading...</p> : <p>Ready!</p>}
            <input
                type="text"
                name="name"
                id="name"
                placeholder="Type a name"
                onChange={(e) => setName(e.target.value.trim())}
            />
            <h1> Generator for CodeDungeons! </h1>
            <CDButton onClick={handleClick}>generate</CDButton>
            <p>Output</p>
            <pre>
                <code>{stdout}</code>
            </pre>
            <CDButton onClick={Back}>Back to Home Screen</CDButton>
            <ul>
                {window.api.getLevelFilenames().map(f=><li>
                    {f}
                </li>)}
            </ul>
        </React.Fragment>
    )
}

export default GeneratorScreen