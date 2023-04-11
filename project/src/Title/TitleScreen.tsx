import React from "react";
import CDButton from "../Components/CDButton";
import { useNavigate } from "react-router-dom";

function TitleScreen() {
    let navigate = useNavigate();
    const newGame = () => {
        let path = `/creation`;
        navigate(path);
    }

    return (
        <React.Fragment>

            <h1> Welcome to CodeDungeons! </h1>
            <CDButton onClick={newGame}> New </CDButton>
            <CDButton> Continue </CDButton>
            <CDButton> Load </CDButton>
        </React.Fragment>
    )
}

export default TitleScreen