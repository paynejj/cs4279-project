import React from "react";
import CDButton from "../Components/CDButton";

function TitleScreen() {
    return (
        <React.Fragment>

            <h1> Welcome to CodeDungeons! </h1>
            <CDButton> New </CDButton>
            <CDButton> Continue </CDButton>
            <CDButton> Load </CDButton>
        </React.Fragment>
    )
}

export default TitleScreen