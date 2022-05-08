import React from 'react';
import Lottie from 'react-lottie';

import animationData from '../animations/landinganimation/data.js';
import ButtonArrow from '../components/ui/ButtonArrow';

import { makeStyles } from '@material-ui/styles';
import { Grid, Button, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  animation: {
    maxWidth: '50em',
    minWidth: '21em',
    marginTop: '2em',
    marginLeft: '10%',
  },
}));

const LandingPage = () => {
  const classes = useStyles();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    renderSettings: {
      preserveAspectRation: 'xMidYMid slice',
    },
  };
  return (
    <Grid container direction="column">
      <Grid item>
        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
        >
          <Grid sm item>
            <Typography variant="h2" align="center">
              Bringing West Coast Technology
              <br />
              to the Midwest
            </Typography>
            <Grid container>
              <Grid item>
                <Button variant="contained">Free Estimate</Button>
              </Grid>
              <Grid item>
                <Button variant="outlined">
                  Learn More
                  <ButtonArrow width={15} height={15} fill="red"></ButtonArrow>
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid sm item className={classes.animation}>
            <Lottie options={defaultOptions} height={'100%'} width={'100%'} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
