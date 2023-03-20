import React, { useState } from "react";
import {
    Button, Radio, RadioGroup, FormControlLabel,
    FormControl, Typography
} from "@mui/material";
import "./CreationForm.css"

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
        <div>
            <Typography id="creation-form-title" variant="h6" component="h2"
                sx={{ fontFamily: 'serif', fontSize: '36px' }}> Character Creation</Typography>
            <form
                id="creation-form"
                onSubmit={handleSubmit}>
                <h4>Enter your character's name:</h4>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                /><br />
                <FormControl>
                    <h4>Pick your character's class:</h4>
                    <RadioGroup
                        row
                        aria-labelledby="character-class"
                        name="character-class-row-radio-buttons-group"
                        color="secondary"
                        value={characterClass}
                        onChange={handleOptionChange}
                    >
                        <FormControlLabel value="Warrior"
                            control={<Radio color="secondary" />} label="Warrior" />
                        <FormControlLabel value="Ranger"
                            control={<Radio color="secondary" />} label="Ranger" />
                        <FormControlLabel value="Mage"
                            control={<Radio color="secondary" />} label="Mage" />
                    </RadioGroup>
                </FormControl>
                <br />
                <Button type="submit"
                    color="secondary"
                    sx={{
                        ':hover': {
                            bgcolor: 'purple',
                            color: 'black',
                        },
                    }}>
                    <Typography fontSize="large">Submit</Typography>
                </Button>
            </form>
        </div>
    );
};
