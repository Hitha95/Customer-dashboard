import React, { useState, useEffect } from 'react'
import { Button, Paper, TableCell, TableHead, TableRow, TableSortLabel, Table, TableBody, TablePagination, TableContainer, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';;

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '250px',
        backgroundColor: '#173f5f',
    color: '#fafafa'
      },
    },
    title: {
        fontSize: 14,
      },
      pos: {
        marginBottom: 12,
      },
    table:{
        maxWidth: '90%',
        //border:'2px solid #173f5f',
        marginBottom:'0px',
        paddingBottom:'0px',
        
    },
    button:{
        maxWidth: '200px',
        backgroundColor:'#173f5f',
        color:'#fafafa'
    }
  }))

const CustomersTable = (props) => {
    const { allcustomers} = props
    const rowInformation = props.filteredCustomers 
    const [orderDirection, setOrderDirection] = useState('asc')
    const [valueToOrderBy, setValueToOrderBy] = useState('name')
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(10)
    const [open, setOpen] = useState(false);
    const [showDetailsCust, setShowDetailsCust] = useState({});
    const [sumTotal, setSumTotal] = useState(0);

    const classes = useStyles()
    const theme = useTheme()
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))
    
    const showDetails = (id) =>{
        setOpen(true)
        const result = allcustomers.filter(cust=>{
            return cust.Phone === id
        })
        let sum = 0
        for(let i=0; i< result.length; i++){
            sum += result[i].Amount
        }
        setShowDetailsCust(result)
        setSumTotal(sum)
        //alert(`${showDetailsCust[0].Name} total order - ${showDetailsCust.length} order total ${sumTotal}`)
        //alert(`${result[0].Name} total order - ${result.length} order total ${sum}`) 
    }

    const createSortHandler = (property) =>(event) =>{
        const isAscending = (valueToOrderBy === property && orderDirection === 'asc')
        setValueToOrderBy(property)
        setOrderDirection(isAscending ? 'desc' : 'asc')
    }
    const handleChangePage = (e, newPage) =>{
        setPage(newPage)
    }
    const handleChangeRowsPerPage =(e) =>{
        setRowsPerPage(parseInt(e.target.value), 10)
        setPage(0)
    }

    const handleClose = () => {
        setOpen(false);
    }
    const descendingComparator = (a,b, orderBy) =>{
        if(b[orderBy]< a[orderBy]){
            return -1
        }
        if(b[orderBy]> a[orderBy]){
            return 1
        }
        return 0
    }
    
    const getComparator = (order, orderBy) =>{
        return order === 'desc' 
        ? (a,b) =>descendingComparator(a,b, orderBy) 
        : (a,b) => -descendingComparator(a,b,orderBy)
    }
    
    const sortedRowInformation =(rowArray, comparator) =>{
        const stabilizedRowArr = rowArray.map((ele, i)=>[ele, i])
        stabilizedRowArr.sort((a,b) =>{
            const order = comparator(a[0], b[0])
            if(order !==0) return order
            return a[1]-b[1]
        })
        return stabilizedRowArr.map(ele => ele[0])
    }    

    return ( 
        <div>
            {
            rowInformation.length === 0 ? (
            <span>No customers found!</span>
            ) : (
            <div>
                <TableContainer className={classes.table} component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell key="id" align="left">  
                                    <b style={{color:'#173f5f'}}>ID</b>
                                </TableCell> 

                                <TableCell key="name" align="left">
                                    <TableSortLabel
                                        active={valueToOrderBy==="name"}
                                        direction={valueToOrderBy==="name" ? orderDirection : 'asc' }
                                        onClick={createSortHandler("name")}
                                    >
                                        <b style={{color:'#173f5f'}}>Name</b>
                                    </TableSortLabel>
                                </TableCell>
                            
                                <TableCell key="mobile" align="left">
                                    <TableSortLabel
                                        active={valueToOrderBy==="mobile"}
                                        direction={valueToOrderBy==="mobile" ? orderDirection : 'asc' }
                                        onClick={createSortHandler("mobile")}
                                    >
                                    <b style={{color:'#173f5f'}}>Phone No.</b> 
                                    </TableSortLabel>
                                </TableCell>
                                <TableCell key="action" align="left">
                                    <b style={{color:'#173f5f'}}>Details</b>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                sortedRowInformation(rowInformation, getComparator(orderDirection, valueToOrderBy))
                                .slice(page* rowsPerPage, page*rowsPerPage + rowsPerPage)
                                .map((cust, i)=>(
                                    <TableRow key={cust.Phone} >
                                        <TableCell align="left">
                                            {i+1}
                                        </TableCell>
                                        <TableCell align="left">
                                            {cust.Name}
                                        </TableCell>
                                        <TableCell align="left">
                                            {cust.Phone}
                                        </TableCell>
                                        <TableCell align="left">
                                            <Button 
                                                className={classes.button}
                                                size="small"
                                                fontSize="small"
                                                variant="contained"
                                                color="primary"
                                                onClick={()=>{showDetails(cust.Phone)}}
                                            >Show details</Button>
                                        </TableCell>
                                    </TableRow>
                                ))
                            } 
                        </TableBody>
                    </Table>
                </TableContainer>
        <TablePagination
            style={{color:'#173f5f'}}
            rowsPerPageOptions = {[5, 10, 15,20]}
            component="div"
            count={rowInformation.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange ={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Order Details"}</DialogTitle>
        <DialogContent>
        <Card >
        <CardContent>
          <Typography variant="h5" component="h2">
          {showDetailsCust[0] && <p>{showDetailsCust[0].Name}: Total order - {showDetailsCust.length}</p>}
          </Typography>
          <Typography variant="body2" component="p">
          Order total Rs.{sumTotal}
          </Typography>
        </CardContent>
      </Card>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            close
          </Button>
        </DialogActions>
      </Dialog>
        </div> )
            }
        </div>
     );
}

export default CustomersTable;

{/* {filteredCustomers.length === 0 ? (<p>No records found</p>) :
            (<table border='1'>
                <thead>
                    <tr><th>id</th><th>name</th><th>Mobile</th><th>details</th></tr>
                </thead>
                <tbody>
                    {
                        filteredCustomers.map((cust, i)=>{
                            return <tr key={cust.Phone}>
                                <td>{i+1}</td>
                                <td>{cust.Name}</td>
                                <td>{cust.Phone}</td>
                                <td><button onClick={()=>{showDetails(cust.Phone)}}>order details</button></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>)} */}