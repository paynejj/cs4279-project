import React, { useEffect } from 'react';
import { Grid, Box, Button, Typography, Modal } from '@mui/material';
import { spellRow } from '../Object/Spell';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '60%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    bgcolor: 'black',
    border: '2px solid purple',
    boxShadow: 24,
    p: 4,
};

const spellASCII = `
  /////|
 | S | |
 | P | |
 | E | |
 | L | |
 | L |/
 '---'
`;


export default function SpellBookModal() {
    const [open, setOpen] = React.useState(false);
    const [spellArray, setSpellArray] = React.useState(spellRow);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        setSpellArray(spellRow);
    }, [spellArray]);

    return (
        <div>
            <Button
                sx={{
                    color: "pink", textAlign: "left",
                    ':hover': {
                        bgcolor: 'purple',
                        color: 'black',
                    },
                }}
                onClick={handleOpen}
                style={{
                    maxWidth: '60px', maxHeight: '110px',
                    minWidth: '60px', minHeight: '110px',
                    fontSize: '9px'
                }}>
                <pre>{spellASCII}</pre>
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <Box sx={{}} m="10">
                        <Typography id="modal-modal-title" variant="h6" component="h2"
                            sx={{ fontFamily: 'serif', fontSize: '36px' }}>
                            SPELLBOOK
                        </Typography>
                    </Box>
                    <Box sx={{ overflowY: 'auto' }}>
                        <Grid container sx={{ mt: 2, maxHeight: "300px" }}>
                            {spellArray.map((spell) => (
                                <Grid item xs={12} sx={{ mt: 1 }} key={spell.Name}>
                                    <Typography sx={{
                                        fontFamily: 'fantasy',
                                        fontStyle: 'italic',
                                        fontSize: '24px'
                                    }}>{spell.Name}</Typography>
                                    <Typography sx={{ fontFamily: 'sans-serif' }}>
                                        {spell.Description}
                                    </Typography>
                                    <Typography sx={{ fontFamily: 'sans-serif' }}>
                                        Level: {spell.Level} &nbsp;
                                        Intelligence: {spell.Intelligence} &nbsp;
                                        Damage: {spell.Damage} &nbsp;
                                        
                                    </Typography>
                                </Grid>
                            ))}
                        </Grid>

                    </Box>
                </Box>
            </Modal>
        </div>
    );
}