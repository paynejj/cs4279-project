import { Grid, Tooltip, Typography, Box } from '@mui/material';
import SpellBook from './SpellBook';
import QuestList from './QuestList';
import { useContext } from 'react';
import { PlayerDataContext } from '../Player/PlayerDataContext';



export default function StatRow() {
    const { playerData } = useContext(PlayerDataContext);
    let abilityStatRows: [string, number][] = [];
    let generalStatRows: [string, number][] = [];
    if (playerData) {
        abilityStatRows = Object.entries(playerData.stats).map(([name, value]) => ([
            name,
            value,
        ]));

        generalStatRows = [
            ['GOLD', playerData.gold],
        ]
    }


    return (
        <div>
            <Box sx={{ border: 1, minWidth: "110px", width: "12vw", borderColor: 'secondary.main', m: 1 }}>
                <Typography variant="h6">Stats</Typography>
                {generalStatRows.map((row, idx) => (
                    <Tooltip key={row[0]} title={row[0]} disableInteractive>
                        <Grid container columns={2}>
                            <Grid item xs={1}> {row[0]}: </Grid>
                            <Grid item xs={1} textAlign="right"> {row[1]}</Grid>
                        </Grid>
                    </Tooltip>
                ))}
                {abilityStatRows.map((row, idx) => (
                    <Tooltip key={row[0]} title={row[0]} disableInteractive>
                        <Grid container columns={2}>
                            <Grid item xs={1}> {row[0]}: </Grid>
                            <Grid item xs={1} textAlign="right"> {row[1]}</Grid>
                        </Grid>
                    </Tooltip>
                ))}
                <Grid container>
                    <Grid item xs={6}>
                        <SpellBook />
                    </Grid>
                    <Grid item xs={6}>
                        <QuestList />
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}
