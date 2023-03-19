import React, { useState } from "react";
import { Button, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from "@mui/material";

type CreationFormProps = {
    onSubmit: (name: string, characterClass: string) => void;
};

export const CreationForm = ({ onSubmit }: CreationFormProps) => {
    const [name, setName] = useState("");
    const [characterClass, setCharacterClass] = useState("");

    const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCharacterClass(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit(name, characterClass);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Enter your character's name:<br /></label>
            <input
                type="text"
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
            /><br />
            <FormControl>
                <label id="character-class" color="pink">Pick your character's class:</label>
                <RadioGroup
                    row
                    aria-labelledby="character-class"
                    name="character-class-row-radio-buttons-group"
                    color="secondary"
                    value={characterClass}
                    onChange={handleOptionChange}
                >
                    <FormControlLabel value="Warrior" control={<Radio color="secondary" />} label="Warrior" />
                    <FormControlLabel value="Ranger" control={<Radio color="secondary" />} label="Ranger" />
                    <FormControlLabel value="Mage" control={<Radio color="secondary" />} label="Mage" />
                </RadioGroup>
            </FormControl>
            <br />
            <Button type="submit" sx={{
                color: "pink", marginLeft: 'auto',
                ':hover': {
                    bgcolor: 'purple',
                    color: 'black',
                },
            }}>Submit</Button>
        </form>
    );
};
