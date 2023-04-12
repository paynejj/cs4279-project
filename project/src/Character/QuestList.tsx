import React from 'react';
import { Grid, Box, Button, Typography, Modal } from '@mui/material';
import { useQuests } from '../Object/QuestData';
import { PlayerDataContext } from '../Player/PlayerDataContext';
import { QuestType } from '../Object/Quest';
import './Character.css';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    height: '60%',
    bgcolor: 'black',
    border: '2px solid purple',
    boxShadow: 24,
    p: 4,
};


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
    const { acceptedQuests, completeQuest } = useQuests();
    const [open, setOpen] = React.useState(false);
    const [selectedQuest, setSelectedQuest] = React.useState<QuestType | null>(acceptedQuests[0]);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { playerData, setPlayerData } = React.useContext(PlayerDataContext);
    function handleComplete() {
        let newPlayerData = { ...playerData };
        if (selectedQuest) {
            newPlayerData.gold += selectedQuest.reward;
            setPlayerData(newPlayerData);
            completeQuest(selectedQuest);
        }
        if (acceptedQuests[1]) {
            let newSelectedQuest = { ...acceptedQuests[1] };
            setSelectedQuest(newSelectedQuest);
        } else {
            setSelectedQuest(null);
        }
    };

    function clickQuest(id: string, idx: number) {
        for (let i = 0; i < acceptedQuests.length; ++i) {
            let element = document.getElementById(acceptedQuests[i].name);
            if (element !== null) {
                if (acceptedQuests[i].name !== id) {
                    element.style.color = "purple";
                    element.style.backgroundColor = "black";
                } else {
                    element.style.color = "pink";
                    element.style.backgroundColor = "purple";
                    setSelectedQuest(acceptedQuests[i]);
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
                                sx={{ fontFamily: 'serif', fontSize: '50px' }}>
                                QUEST LIST
                            </Typography>
                        </Grid>
                        <Grid item sx={{ mt: 2, height: '100%' }} xs={12}>
                            <Grid container columns={12} sx={{ height: '100%' }}>
                                <Grid item xs={4} columns={12}
                                    sx={{ width: '90%', height: '100%', overflowY: 'auto' }}>
                                    {acceptedQuests.map((row, idx) => (
                                        <Grid item xs={12} key={row.name}>
                                            <Typography
                                                id={row.name}
                                                variant="h6"
                                                lineHeight="2.5"
                                                fontSize="21px"
                                                fontStyle="italic"
                                                width="90%"
                                                onClick={() => clickQuest(row.name, idx)}
                                                className="quest-notselected">
                                                &nbsp;&#8226;&nbsp;{row.name}
                                            </Typography>
                                        </Grid>
                                    ))}
                                </Grid>
                                <Grid item xs={7.5}
                                    sx={{ marginLeft: "10px", height: '100%', overflowY: 'auto' }}>
                                    {selectedQuest !== null && acceptedQuests.length > 0 ?
                                        <div>
                                            <Typography
                                                key="selectedQuest"
                                                text-align='justify'
                                                sx={{ overflowX: 'hidden', fontSize: '18px' }}>
                                                {selectedQuest?.description} <br />
                                                <br />
                                                Reward: {selectedQuest?.reward} gold<br />
                                                <br />
                                                Progress: {selectedQuest?.itemCollected}&nbsp;
                                                / &nbsp;{selectedQuest?.itemToCollect}
                                            </Typography>
                                            <div>
                                                {selectedQuest?.itemCollected
                                                    ===
                                                    selectedQuest?.itemToCollect
                                                    ? <div>
                                                        <br />
                                                        <Button
                                                            onClick={handleComplete}
                                                            sx={{
                                                                backgroundColor: "purple",
                                                                color: "black",
                                                                fontSize: "21px",
                                                                ':hover': {
                                                                    bgcolor: 'purple',
                                                                    color: 'pink',
                                                                },
                                                            }}
                                                        >
                                                            Complete
                                                        </Button>
                                                    </div>
                                                    : <div></div>}
                                            </div>
                                        </div>
                                        : <div></div>}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
        </div>
    );
}
