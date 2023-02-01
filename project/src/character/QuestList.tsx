import * as React from 'react';
import { Grid, Box, Button, Typography, Modal } from '@mui/material';
import ConstructionIcon from '@mui/icons-material/Construction';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'black',
    border: '2px solid purple',
    boxShadow: 24,
    p: 4,
};

const spellASCII = `
  /////|
 | Q | |
 | U | |
 | E | |
 | S | |
 | T |/
 '---'
`;

export default function QuestListModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button
                sx={{ color: "pink", textAlign: "left" }}
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
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Typography id="modal-modal-title" variant="h6" component="h2"
                                sx={{ fontFamily: 'serif', fontSize: '36px' }}>
                                QUEST LIST
                            </Typography>
                        </Grid>

                        <Grid item sx={{ mt: 2 }} xs={8}>
                            <Button sx={{ color: "pink"}}
                            >
                                <ConstructionIcon display="inline" sx={{color: 'pink'}}/>
                                <Typography display="inline" sx={{color: 'pink'}}>
                                    The quest list is under construction...
                                </Typography>
                            </Button>
                        </Grid>
                    </Grid>

                </Box>
            </Modal>
        </div>
    );
}
