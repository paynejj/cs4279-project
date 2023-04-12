import React from "react";
import { useNavigate } from "react-router-dom";
import CDButton from "../Components/CDButton";


function LoadButton({ onLoad }) {
    const navigate = useNavigate();

    const handleChange = (event) => {
        const file = event.target.files[0];

        const reader = new FileReader();
        reader.onload = () => {
            if (typeof reader.result === "string") {
                const data = JSON.parse(reader.result);
                onLoad(data.player, data.quests);
            }
        };

        if (file) {
            reader.readAsText(file);
        }

        console.log("Uploaded");
        navigate('/hometown');
    };

    return (
        <React.Fragment>
            <CDButton>
                <label htmlFor="upload-input" style={{ cursor: "pointer" }}> Load </label>
            </CDButton>
            <input
                type="file"
                id="upload-input"
                onChange={handleChange}
                style={{ display: "none" }}
            />
        </React.Fragment>
    );
}

export default LoadButton;