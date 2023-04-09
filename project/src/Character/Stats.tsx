import { Grid, Tooltip, Typography, Box } from '@mui/material';
import SpellBook from './SpellBook';
import QuestList from './QuestList';
import { useContext } from 'react';
import { PlayerDataContext } from '../Player/PlayerDataContext';



export default function StatRow() {
    const { playerData } = useContext(PlayerDataContext);
    let abilityStatRows: [string, number][] = [];
    let hpMpRows: [string, string][] = [];
    if (playerData) {
        abilityStatRows = Object.entries(playerData.stats)
            .map(([name, value]) => {
                if (name === "MaxHP" || name === "MaxMP" || name === "HP" || name === "MP") {
                    return null;
                }
                return [name, value] as [string, number];
            })
            .filter((entry): entry is [string, number] => entry !== null);

        abilityStatRows.unshift(
            ['GOLD', playerData.gold]
        );

        hpMpRows.push(["HP", playerData.stats.HP + "/" + playerData.stats.MaxHP]);
        hpMpRows.push(["MP", playerData.stats.MP + "/" + playerData.stats.MaxMP]);
    }

    return (
        <div>
            <Box sx={{ border: 1, minWidth: "110px", width: "15vw", maxWidth: "200px", borderColor: 'secondary.main', m: 1 }}>
                <Typography variant="h6">Stats</Typography>
                {hpMpRows.map((row, idx) => (
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
                    <Grid item xs={0.5} />
                    <Grid item xs={5.5}>
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
