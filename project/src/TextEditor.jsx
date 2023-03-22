import CodeMirror from '@uiw/react-codemirror';
import React, { useEffect, useState } from 'react';
import { usePython } from 'react-py'
import { saveAs } from 'file-saver';
import ReactFileReader from 'react-file-reader';
import { sublime } from '@uiw/codemirror-theme-sublime';
import { python } from '@codemirror/lang-python';

function TextEditor() {
  const [input, setInput] = useState('');
  const { runPython, stdout, stderr, isLoading, isRunning } = usePython();
  function saveFile(){
    var blob = new Blob([input], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "new.txt");
  }
  const handleFiles = files => {
    var reader = new FileReader();
      reader.onload = function(e) {
          // Use reader.result
          if(typeof reader.result === "string"){
            setInput(reader.result)
          }
      }
      reader.readAsText(files[0]);

  }
  useEffect(() => {
    console.log(input);
  }, [input]);
  return (
    <>
    {isLoading ? <p>Loading...</p> : <p>Ready!</p>}
    <ReactFileReader handleFiles={handleFiles} fileTypes={'.txt'}>
    <button className='btn'>load</button>
    </ReactFileReader>
    <form>
      <CodeMirror
        value={input}
        height="300px"
        autoFocus={true}
        extensions={[python({ py: true })]}
        indentWithTab= {true}
        theme={sublime}
        onChange={(input, data, value) => {
          setInput(input);
        }}
      />
      <input
        type="submit"
        value={!isRunning ? 'Run' : 'Running...'}
        disabled={isLoading || isRunning}
        onClick={(e) => {
          e.preventDefault()
          runPython(input)
          saveFile()
        }}
      />
    </form>
    <p>Output</p>
    <pre>
      <code>{stdout}</code>
    </pre>
    <p>Error</p>
    <pre>
      <code>{stderr}</code>
    </pre>
  </>
  );
}

export default TextEditor;