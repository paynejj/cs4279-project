import React from "react";
import { useNavigate } from "react-router-dom";
import CDButton from "../Components/CDButton";


function ContinueButton({onLoad}) {

    const [loadedSave, setLoadedSave] = React.useState('');
    const navigate = useNavigate();

    const loadSave = () => {
        try {
            // trying to read the file
            let loadedSave = window.api.readFile("./autosave.json");
            console.log(typeof loadedSave);
            setLoadedSave(loadedSave);

        } catch (error) {
            console.log('No autoave.json file found');
        }
        if (loadedSave) {
            console.log(loadedSave);
            if (typeof loadedSave === "string") {
                const data = JSON.parse(loadedSave);
                onLoad(data.player, data.quests);
                console.log(data);
                navigate('/hometown');
            }
        }
    };

    return (
        <CDButton onClick={loadSave}> Continue </CDButton>
    );
}

export default ContinueButton;