import React from 'react';
import StatsItem from './StatsItem'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const StatsContainer = (props) => {
    const classes = useStyles();
    const { allcustomers, uniqueCustomers } = props
    const totalAmount = (allcustomers) =>{
        let sum = 0
        for(let i=0; i<allcustomers.length; i++){
            sum += allcustomers[i].Amount
        }
        return sum
    }

    return ( 
        <div style={{marginBottom:'200px'}}>
        <h2 style={{color:'#173f5f', fontFamily:'"Roboto", "Helvetica", "Arial"', textDecoration:'underline',marginBottom:'50px'}}>Customer Stats</h2>
            <Grid container spacing={3} direction='row' justifyContent="center" alignItems="center" >
                <Grid item xs={12} md={3}>
                    <StatsItem count={allcustomers.length} name='Orders' />                    
                </Grid>
                <Grid item xs={12} md={3}>
                    <StatsItem count={totalAmount(allcustomers)} name='Amount' />                    
                </Grid>
                <Grid item xs={12} md={3}>
                    <StatsItem count={uniqueCustomers.length} name='Customers' />                   
                </Grid>
            </Grid> 
        </div>
            
     );
}
 
export default StatsContainer;