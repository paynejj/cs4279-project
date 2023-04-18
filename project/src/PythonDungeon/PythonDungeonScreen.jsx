import CodeMirror from '@uiw/react-codemirror';
import { sublime } from '@uiw/codemirror-theme-sublime';
import { python } from '@codemirror/lang-python';
import React from "react";
import CDButton from "../Components/CDButton";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from 'react';
import { usePython } from 'react-py';
import { PlayerDataContext } from '../Player/PlayerDataContext';

function PythonDungeonScreen() {
    const {playerData, setPlayerData} = useContext(PlayerDataContext);
    let navigate = useNavigate();
    let input = "";
    let level = "";
    let finish = "";
    const Back = () => {
        let path = `/`;
        navigate(path);
    }
    const {runPython, stdout, stderr, isLoading, isRunning } = usePython();
    const [name, setName] = useState('');
    const [code, setCode] = useState('');
    const [levelname, setLevelname] = useState('');
    const [output, setOutput] = useState('');
    const  splitOutput = async () => {
        while(isRunning) {
            await new Promise(r => setTimeout(r, 5000));
        }
        console.log(stdout)
        const [out, result] = stdout.split('|');
        setOutput(out);
        const res = JSON.parse(result);
        if(res.win){
            const updateCompletedLevels = playerData.completedLevels;
            updateCompletedLevels[res.name] = res.reward.gold
            console.log(updateCompletedLevels)
            setPlayerData({...playerData, completedLevels: updateCompletedLevels});
        } 
    }
    async function run() {
        input = window.api.readPy("Dungeon");
        finish = window.api.readPy("Finish");
        level = JSON.stringify(window.api.readLevel(levelname));
        // Set the input variable in Python
        const newcode = `filename = '${level}'\n${input}\n${code}\n${finish}`
        runPython(newcode);
        splitOutput();
    }
    const saveFile = (e) => {
        window.api.writeUserPy(name, code)
    }
    const Load = (e) => {
        setCode(window.api.readUserPy(name))
    }
    
    return (
        <React.Fragment>
            <CDButton onClick={Back}>Back to Home Screen</CDButton>
            {isLoading ? <p>Loading...</p> : <p>Ready!</p>}
            <CDButton onClick={Load}>Load Script</CDButton>
            <input
                type="text"
                name="name"
                id="name"
                placeholder="Script Name"
                onChange={(e) => setName(e.target.value.trim())}
            />
            <input
                type="text"
                name="name"
                id="name"
                placeholder="Level Name"
                onChange={(e) => setLevelname(e.target.value.trim())}
            />
            <CodeMirror
                value={code}
                height="300px"
                autoFocus={true}
                extensions={[python({ py: true })]}
                indentWithTab={true}
                theme={sublime}
                onChange={(code, data, value) => {
                    setCode(code);
                }}
            />
            <CDButton onClick={async () => { run()} }>Run Code</CDButton>
            <CDButton onClick={saveFile}>Save</CDButton>
            <p>Output</p>
            <pre>
                <code>{output}</code>
            </pre>
            <ul>
                <p>
                    Python Scripts
                </p>
                {window.api.getUserPyFilenames().map(f=><li>
                    {f}
                </li>)}
            </ul>
            <ul>
                <p>
                    Levels Avaliable
                </p>
                {window.api.getLevelFilenames().map(f=><li>
                    {f}
                </li>)}
            </ul>
        </React.Fragment>
    )
}

export default PythonDungeonScreen