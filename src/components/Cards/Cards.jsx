import React from 'react';
import { Grid, Card, CardContent, Typography } from '@material-ui/core';
import CountUp from 'react-countup';
import styles from './Cards.module.css';
import cx from 'classname';

const Cards = ({data :{ confirmed, recovered, deaths, lastUpdate }}) => {
  if(!confirmed){
    return "Loading";
  }
//   console.log({data :{ confirmed, recovered, deaths, lastUpdate }});
    return(
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item  component={Card} xs={12} md={3} className={cx([styles.card, styles.infected])}>
                    <CardContent>
                        <Typography color="primary" gutterBottom>Infected</Typography>
                        <Typography color="primary" variant="h5">
                            <CountUp staart={0} end={confirmed.value} duration={4.5}  separator=","></CountUp>    
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of Active Cases of CoVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item  component={Card} xs={12} md={3} className={cx([styles.card, styles.recovered])}>
                    <CardContent>
                        <Typography style={{color:'rgba(0,255,0,0.5)'}} gutterBottom>Recovered</Typography>
                        <Typography style={{color:'rgba(0,255,0,0.5)'}} variant="h5">
                        <CountUp staart={0} end={recovered.value} duration={4.5} separator=","></CountUp>     
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of Recovered Cases of CoVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item  component={Card} xs={12} md={3} className={cx([styles.card, styles.deaths])}>
                    <CardContent>
                        <Typography color="secondary" gutterBottom>Deaths</Typography>
                        <Typography color="secondary" variant="h5">
                        <CountUp staart={0} end={deaths.value} duration={4.5}  separator=","></CountUp> 
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of Death Cases of CoVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;