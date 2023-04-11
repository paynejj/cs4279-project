import CodeMirror from '@uiw/react-codemirror';
import { useEffect, useState } from 'react';
import { usePython } from 'react-py'
import { saveAs } from 'file-saver';
import ReactFileReader from 'react-file-reader';
import { sublime } from '@uiw/codemirror-theme-sublime';
import { python } from '@codemirror/lang-python';
import CDButton from './Components/CDButton';
import CDInput from './Components/CDInput';
import { useQuests } from "./Object/QuestData";

function TextEditor() {
  const { acceptedQuests, progressQuest } = useQuests();
  const [input, setInput] = useState('');
  const { runPython, stdout, stderr, isLoading, isRunning } = usePython();

  let persistencyQuest = acceptedQuests.find((quest) => quest.name === "Persistency");
  let chatgptQuest = acceptedQuests.find((quest) => quest.name === "CHATGPT");

  function saveFile() {
    if (chatgptQuest) {
      progressQuest(chatgptQuest);
    }

    // not working because saveAs will cause the page to be re-rendered

    var blob = new Blob([input], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "new.txt");
  }

  const handleFiles = files => {
    var reader = new FileReader();
    reader.onload = function (e) {
      // Use reader.result
      if (typeof reader.result === "string") {
        setInput(reader.result)
      }
    }
    reader.readAsText(files[0]);

  }
  function handle() {
    console.log(window.api.readFile("./sample.txt"))
    setInput(window.api.readFile("./sample.txt"))
  }
  useEffect(() => {
    if (stdout === "[0, 1, 2, 3, 4, 5]") {
      progressQuest(persistencyQuest);
    }
  }, [stdout]);




  return (
    <>
      {isLoading ? <p>Loading...</p> : <p>Ready!</p>}
      <span style={{ display: "flex" }}>
        <ReactFileReader handleFiles={handleFiles} fileTypes={'.txt'}>
          <CDButton >select load</CDButton>
        </ReactFileReader>
        <CDButton onClick={handle}>preload</CDButton>
      </span>
      <form>
        <CodeMirror
          value={input}
          height="300px"
          autoFocus={true}
          extensions={[python({ py: true })]}
          indentWithTab={true}
          theme={sublime}
          onChange={(input, data, value) => {
            setInput(input);
          }}
        />
        <span style={{ display: "flex" }}>
          <CDInput
            type="submit"
            value={!isRunning ? 'Run' : 'Running...'}
            disabled={isLoading || isRunning}
            onClick={(e) => {
              e.preventDefault()
              runPython(input)
            }}
          />
          <CDButton onClick={saveFile}>save</CDButton>
        </span>
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