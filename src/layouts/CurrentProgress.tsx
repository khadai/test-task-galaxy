import React from 'react';
import {Planet} from "../components";
import {Paper} from "@mui/material";
import ProgressBar from "react-customizable-progressbar";

const Component = () => {

    return (
        <Paper>
            Current Progress
            <ProgressBar
                radius={100}
                progress={66}
                fillColor="#ffffff00"
                strokeWidth={2}
                strokeColor="#ffffff"
                trackStrokeWidth={2}
                trackStrokeColor="#8e8e8e"
                pointerRadius={8}
                pointerStrokeWidth={4}
                pointerStrokeColor="#ffffff"
                pointerFillColor="#ffffff"
            />
        </Paper>
    );
}

export default Component;
