import React from "react";
import { useNavigate } from "react-router-dom";
import CDButton from "../Components/CDButton";


function ContinueButton({onLoad}) {

    const [loadedSave, setLoadedSave] = React.useState('');
    const navigate = useNavigate();

    const loadSave = () => {
        try {
            // trying to read the file
            let loadedSave = window.api.readFile("./save.json");
            console.log(typeof loadedSave);
            setLoadedSave(loadedSave);

        } catch (error) {
            console.log('No save.json file found');
            window.alert("window.api.readFile() is broken");
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