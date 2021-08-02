import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {Typography, Divider} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: '200px',
    backgroundColor: '#173f5f',
    color: '#fafafa'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const StatsItem = (props) => {
    const classes = useStyles();
    const {name, count} = props
    return ( 
        <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {name}
          </Typography><hr/>
          <Typography variant="h5" component="h2">
            {count}
          </Typography>
        </CardContent>
      </Card>
     );
}
 
export default StatsItem;