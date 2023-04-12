import React from 'react';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import { Potion } from '../Object/Potion';
import { Equipment } from '../Object/Equipment';
import InfoIcon from '@mui/icons-material/Info';

interface InfoProps {
  name: string;
  description: Equipment | Potion;
}

export default function InfoTooltip({ name, description }: InfoProps) {
  return (
    <Tooltip
      disableInteractive
      arrow
      componentsProps={{
        tooltip: {
          sx: {
            bgcolor: 'purple',
            '& .MuiTooltip-arrow': {
              color: 'purple',
            },
          },
        },
      }}
      title={
        <Typography sx={{ color: 'pink', bgcolor: 'black', p: 2 }}>
          <strong>{name}</strong>
          <br />
          {typeof description[1] === 'number' ? (
            <span>{description[0]}: {description[1]}</span>
          ) : (
            <div>
              {Object.keys(description[1]).map((key) => (
                <div key={key}>
                  {key}: {description[1][key]}
                </div>
              ))}
            </div>
          )}
        </Typography>
      }>
      <Typography sx={{ color: 'purple', display: 'flex', alignItems: 'center', fontSize: "clamp(18px, 2vw, 25px)" }}> {name} </Typography>
    </Tooltip>
  );
}
