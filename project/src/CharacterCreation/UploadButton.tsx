import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UploadIcon from '@mui/icons-material/Upload';
import { Button } from '@mui/material';
import "./CreationForm.css"

function UploadScreen({ onUpload }) {
    const navigate = useNavigate();
    const [file, setFile] = useState(null);

    const handleChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleUpload = () => {
        const reader = new FileReader();
        reader.onload = () => {
            if (typeof reader.result === "string") {
                const data = JSON.parse(reader.result);
                onUpload(data.player, data.quests);
            }
        };
        if (file) {
            reader.readAsText(file);
        }
        console.log("Uploaded");
        navigate('/hometown');
    };

    return (
        <div id="upload-div">
            <h4>Or Upload Your JSON Save File</h4>
            <input type="file" onChange={handleChange} />
            <br />
            <br />
            <Button
                onClick={handleUpload}
                color="secondary"
                sx={{
                    ':hover': {
                        bgcolor: 'purple',
                        color: 'black',
                    },
                }}
            ><UploadIcon />Upload</Button>
        </div>
    );
}

export default UploadScreen;