import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Potion } from '../Object/Potion';
import { Equipment } from '../Object/Equipment';

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

interface InfoProps {
  name: string;
  description: Equipment | Potion;
  value?: number;
}

export default function InfoModal({ name, description, value }: InfoProps) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button sx={{ color: "white", textAlign: "left" }} onClick={handleOpen}>Info</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h2">
            {name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, fontSize: '19px' }}>
            {value && <div>Value: {value}</div>}
            {typeof description[1] === "number" ? (<span>{description[0]}: {description[1]}</span>)
              :
              <div>
                {Object.keys(description[1]).map((key) => (
                  <div key={key}>
                    {key}: {description[1][key]}
                  </div>
                ))}
              </div>
            }
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
