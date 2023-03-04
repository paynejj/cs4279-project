import { Grid, Tooltip, Typography, Box } from '@mui/material';
import SpellBook from './SpellBook';
import QuestList from './QuestList';
import {abilityStatRows, generalStatRows} from './StatTools';

//Description of stat for stat's tooltip
let statDescription = `This is the stat description.
This will tell you about what each of the ability does
and what each of them affects`;

export default function StatRow() {
    return (
        <div>
            <Box sx={{ border: 1, minWidth: "110px", width: "12vw", borderColor: 'secondary.main', m: 1 }}>
                <Typography variant="h6">Stats</Typography>
                {generalStatRows.map((row, idx) => (
                    <Tooltip key={row[0]} title={statDescription} disableInteractive>
                        <Grid container columns={2}>
                            <Grid item xs={1}> {row[0]}: </Grid>
                            <Grid item xs={1} textAlign="right"> {row[1]}</Grid>
                        </Grid>
                    </Tooltip>
                ))}
                {abilityStatRows.map((row, idx) => (
                    <Tooltip key={row[0]} title={statDescription} disableInteractive>
                        <Grid container columns={2}>
                            <Grid item xs={1}> {row[0]}: </Grid>
                            <Grid item xs={1} textAlign="right"> {row[1]}</Grid>
                        </Grid>
                    </Tooltip>
                ))}
                <Grid container>
                    <Grid item>
                        <SpellBook />
                    </Grid>
                    <Grid item>
                        <QuestList />
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}
