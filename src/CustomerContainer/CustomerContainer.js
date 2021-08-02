import React, { useState } from 'react';
import CustomersTable from './CustomersTable';
import Search from './Search';
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

const CustomerContainer = (props) => {
    const classes = useStyles();
    const { allcustomers, uniqueCustomers} = props
    const [searchInput, setsearchInput] = useState('');

    const filteredCustomers = (uniqueCustomers) =>{
        const result = uniqueCustomers.filter(cust=>{
            return (cust.Name.toLowerCase().includes(searchInput) || cust.Phone.toString().includes(searchInput))
        })
        return result
    }

    const handleSearch = (e) =>{
        setsearchInput(e.target.value)
    }
    return (
    <div style={{marginBottom:'0px'}}>
        <h2 style={{color:'#173f5f', fontFamily:'"Roboto", "Helvetica", "Arial"', textDecoration:'underline'}}>Listing Customers</h2>
        <Grid container direction="column" justifyContent="left" alignItems="left">
            <Grid item xs={12}>
                <Search searchInput={searchInput} handleSearch={handleSearch} />
            </Grid>
            <Grid item xs={12}>
                <CustomersTable allcustomers={allcustomers} filteredCustomers={filteredCustomers(uniqueCustomers)}/>
            </Grid>
        </Grid>
    </div>

     );
}

export default CustomerContainer;


{/* <h2>Listing Customers</h2>
            <Search searchInput={searchInput} handleSearch={handleSearch} />
            <CustomersTable allcustomers={allcustomers} filteredCustomers={filteredCustomers(uniqueCustomers)}/> */}