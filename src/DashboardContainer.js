import React, { useState } from 'react';
import customerData from './customerData.json'
import StatsContainer from './StatsContainer/StatsContainer'
import CustomerContainer from './CustomerContainer/CustomerContainer'
import OrderContainer from './OrderContainer/OrderContainer'
import _ from 'lodash'
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

const DashboardContainer = (props) => {
    const classes = useStyles();
    const [allcustomers, setallcustomers] = useState(customerData);
    const uniqueCustomers = (customers) =>{
        let result = _.uniqBy(customers, 'Phone')
        return result   
    }
    return ( 
        <div style={{marginLeft:'100px', alignItems:'center' }}>
            <h1 style={{color:'#173f5f', fontFamily:'"Roboto", "Helvetica", "Arial"',textAlign:'center', textDecoration:'underline' }}><i>Customer Dashboard</i></h1>
            <Grid container  direction='row'>
                <Grid item xs={12}>
                    <StatsContainer allcustomers={allcustomers} uniqueCustomers={uniqueCustomers(allcustomers)} />
                </Grid>
                <Grid item xs={12}>
                    <CustomerContainer allcustomers={allcustomers} uniqueCustomers={uniqueCustomers(allcustomers)} />
                </Grid>
                <Grid item xs={12}>
                    <OrderContainer allcustomers={allcustomers} uniqueCustomers={uniqueCustomers(allcustomers)}/>
                </Grid>
            </Grid>    
        </div>
     );
}
 
export default DashboardContainer;