import React, { useState } from "react";
import {
    Button, Radio, RadioGroup, FormControlLabel,
    FormControl, Typography
} from "@mui/material";
import "./CreationForm.css"
import CDinput from "../Components/CDInput";
import { grey, red, green, blue } from '@mui/material/colors';

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
                sx={{
                    fontFamily: 'serif',
                    fontSize: 'max(5vw, 40px)',
                }}> Character Creation</Typography>
            <form
                id="creation-form"
                onSubmit={handleSubmit}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h2>Enter your character's name:</h2>
                <CDinput
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                /><br />
                <FormControl>
                    <h2>Pick your character's class:</h2>
                    <RadioGroup
                        row
                        aria-labelledby="character-class"
                        name="character-class-row-radio-buttons-group"
                        color="secondary"
                        value={characterClass}
                        onChange={handleOptionChange}>
                        <FormControlLabel
                            value="Warrior"
                            control={<Radio sx={{
                                color: grey[600],
                                '&.Mui-checked': { color: red[600], },
                            }} />}
                            label={<Typography
                                variant="h5"
                                sx={{ color: red[800] }}>Warrior</Typography>}/>
                        <FormControlLabel
                            value="Ranger"
                            control={<Radio sx={{
                                color: grey[600],
                                '&.Mui-checked': { color: green[600], },
                            }} />}
                            label={<Typography variant="h5" 
                            sx={{ color: green[800] }}>Ranger</Typography>}/>
                        <FormControlLabel
                            value="Mage"
                            control={<Radio sx={{
                                color: grey[600],
                                '&.Mui-checked': { color: blue[600], },
                            }} />}
                            label={<Typography variant="h5" 
                            sx={{ color: blue[800] }}>Mage</Typography>}/>
                    </RadioGroup>
                </FormControl>
                <br />
                <Button type="submit"
                    sx={{
                        bgcolor: 'purple',
                        color: 'black',
                        ':hover': {
                            bgcolor: 'purple',
                            color: 'pink',
                        },
                    }}>
                    <Typography fontSize="x-large">Submit</Typography>
                </Button>
            </form>
        </div>
    );
};
