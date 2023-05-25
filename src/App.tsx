import React from 'react';
import './styles/App.css';
import {CurrentProgress, Navigation, NewAdditionList, PlanetsList, ProgressList} from "./layouts";
import {NavDrawer} from "./components";
import {Grid, Stack} from "@mui/material";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

function App() {
    return (
        <div className="App">
            <Navigation/>
            <NavDrawer/>


            <Container >
                <Grid container spacing={2} direction='row'>
                    <Grid item sm={3}>
                        <CurrentProgress/>
                    </Grid>
                    <Grid item container spacing={2} sm={9} direction='column'>
                        <Grid item> <PlanetsList/></Grid>
                        <Stack spacing={2} direction='row'> <ProgressList/></Stack>
                    </Grid>
                </Grid>
                <Stack spacing={2} direction='row'>
                <NewAdditionList/>
                </Stack>
            </Container>
        </div>
    );
}

export default App;
