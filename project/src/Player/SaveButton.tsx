import SaveIcon from '@mui/icons-material/Save';
import Button from '@mui/material/Button';
import { PlayerDataContext } from "./PlayerDataContext";
import { useContext } from 'react';

export const SaveButton = () => {
const playerData = useContext(PlayerDataContext);
  return (
        <Button
            color='inherit'
        >
            <SaveIcon />SAVE
        </Button>
    );
};