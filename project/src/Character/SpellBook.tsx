import React from 'react';
import { Grid, Box, Button, Typography, Modal } from '@mui/material';

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

type Spell = [spellName: string, spellDescription: string,
    spellStat1: string, spellStat2: string];

const spellRow: Spell[] = [
    ["Fireball", "Fireball burns your enemies!",
        "Level: 10; Intelligence: 8", "MP: 7; Damage: 8 - 14"],
    ["Teleport", "Teleport back to the Hometown",
        "Level: 12; Intelligence: 13", "MP: 15; Damage: N/A"]
]

export default function SpellBookModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
                            {spellRow.map((row) => (
                                <Grid item xs={12} sx={{ mt: 1 }} key={row[0]}>
                                    <Typography sx={{
                                        fontFamily: 'fantasy',
                                        fontStyle: 'italic',
                                        fontSize: '24px'
                                    }}>{row[0]}</Typography>
                                    <Typography sx={{ fontFamily: 'sans-serif' }}>
                                        {row[1]}
                                    </Typography>
                                    <Typography sx={{ fontFamily: 'sans-serif' }}>
                                        {row[2]}
                                        <br />
                                        {row[3]}
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