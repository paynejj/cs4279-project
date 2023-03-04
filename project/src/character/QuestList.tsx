import React from 'react';
import { Grid, Box, Button, Typography, Modal } from '@mui/material';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    height: '50%',
    bgcolor: 'black',
    border: '2px solid purple',
    boxShadow: 24,
    p: 4,
};

type Quest = [questName: string, questDescription: string];

const questRow: Quest[] = [
    ['Get Some French Fries',
        `You may be wondering what the quest is about... welllllll it is nott about anything really that is worth mentioning. \
        This is what the quest is about:\nGo get some french fries from \n BurgerQueen.\n`],

    ['Look under the table',
        'Just get your knees down there mate...'],

    ['One Bite Big Mac',
        'As title.'],

    ['Stick Your Head OUT',
        'Stick your head out of the window in the basement. As simple as it is.'],

]


const questASCII = `
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
    const [questDescription, setQuestDescription] = React.useState(questRow[0][1]);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    function clickQuest(id: string, idx: number) {
        for (let i = 0; i < questRow.length; ++i) {
            let element = document.getElementById("quest" + questRow[i][0]);
            if (element !== null) {
                if (questRow[i][0] !== id) {
                    element.style.color = "pink";
                    element.style.backgroundColor = "black";
                } else {
                    element.style.color = "black";
                    element.style.backgroundColor = "purple";
                    setQuestDescription(questRow[idx][1]);
                }
            }
        }
    }

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
                <pre>{questASCII}</pre>
            </Button>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <Grid container sx={{ height: '80%' }}>
                        <Grid item xs={12}>
                            <Typography id="modal-modal-title" variant="h6" component="h2"
                                sx={{ fontFamily: 'serif', fontSize: '36px' }}>
                                QUEST LIST
                            </Typography>
                        </Grid>
                        <Grid item sx={{ mt: 2, height: '100%' }} xs={12}>
                            <Grid container columns={12} sx={{ height: '100%' }}>
                                <Grid item xs={4} columns={12}
                                    sx={{ width: '90%', height: '100%', overflowY: 'auto' }}>
                                    {questRow.map((row, idx) => (
                                        <Grid item xs={12} key={row[0]}>
                                            <Typography
                                                id={"quest" + row[0]}
                                                variant="h6"
                                                lineHeight="2.5"
                                                fontSize="18px"
                                                fontStyle="italic"
                                                width="90%"
                                                onClick={() => clickQuest(row[0], idx)}
                                                sx={{
                                                    color: "pink",
                                                    ':hover': {
                                                        bgcolor: 'purple',
                                                        color: 'black',
                                                    },
                                                }}>
                                                {row[0]}
                                            </Typography>
                                        </Grid>
                                    ))}
                                </Grid>
                                <Grid item xs={7.5}
                                    sx={{ marginLeft: "10px", height: '100%', overflowY: 'auto' }}>
                                    {(questDescription.split(/\n/)).map((row, idx) => (
                                        <Typography
                                            key={idx}
                                            text-align='justify'
                                            sx={{ overflowX: 'hidden', }}>
                                            {row}
                                        </Typography>
                                    ))}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
        </div>
    );
}
