import React from 'react';
import {CircularProgress, Paper} from "@mui/material";
import ProgressBar from 'react-customizable-progressbar'


const Component = () => {

    return (
        <Paper>
            Progress
            <ProgressBar
                radius={50}
                progress={66}
                fillColor="#ffffff00"
                strokeWidth={2}
                strokeColor="#ffffff"
                trackStrokeWidth={2}
                trackStrokeColor="#8e8e8e"
                // pointerRadius={8}
                // pointerStrokeWidth={4}
                // pointerStrokeColor="#ffffff"
                // pointerFillColor="#ffffff"
            />
        </Paper>
    );
}

export default Component;
