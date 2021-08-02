import React from 'react';
import OrdersTable from './OrdersTable';
import OrdersChart from './OrdersChart';
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

const OrderContainer = (props) => {
    const classes = useStyles();
    const { allcustomers, uniqueCustomers } = props
    const orderFrequency = () =>{
        const frequencyObj = {1: 0, 2:0, 3:0, 4:0, '5+':0}
        uniqueCustomers.forEach((cust)=>{
        const allDetails = allcustomers.filter(c => cust.Phone ===c.Phone)
        if(allDetails.length>=5){
            frequencyObj['5+']++
        }else{
            frequencyObj[allDetails.length]++
        }
    })
    return frequencyObj
    } 

    return ( 
        <div style={{marginTop:'0px'}}>
            <h2 style={{color:'#173f5f', fontFamily:'"Roboto", "Helvetica", "Arial"', textDecoration:'underline'}}>Order Distribution</h2>
            <Grid container direction='row'>
                <Grid item xs={12} md={6}>
                    <OrdersTable orderFrequency={orderFrequency()} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <OrdersChart orderFrequency={orderFrequency()} /> 
                </Grid>
            </Grid>  
        </div>
     );
}
 
export default OrderContainer;