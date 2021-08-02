import React, {useState} from 'react';
import { Button, Paper, TableCell, TableHead, TableRow, TableSortLabel, Table, TableBody, TablePagination, TableContainer, Dialog, DialogActions, DialogContent, DialogTitle, DialogContentText,TextField } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';;

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '250px',
      },
    },
    table:{
        maxWidth: '90%',
        border:'2px solid #173f5f'
        
    },
    button:{
        maxWidth: '200px',
        backgroundColor:'#173f5f',
        color:'#fafafa'
    }
  }))


const OrdersTable = (props) => {
    //const rowInformation = props.orderFrequency
    // const [orderDirection, setOrderDirection] = useState('asc')
    // const [valueToOrderBy, setValueToOrderBy] = useState('name')
    // const [page, setPage] = useState(0)
    // const [rowsPerPage, setRowsPerPage] = useState(5)
    //const [open, setOpen] = useState(false);

    const classes = useStyles()
    // const theme = useTheme()
    // const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))
    
    // const descendingComparator = (a,b, orderBy) =>{
    //     if(b[orderBy]< a[orderBy]){
    //         return -1
    //     }
    //     if(b[orderBy]> a[orderBy]){
    //         return 1
    //     }
    //     return 0
    // }
    
    // const getComparator = (order, orderBy) =>{
    //     return order === 'desc' 
    //     ? (a,b) =>descendingComparator(a,b, orderBy) 
    //     : (a,b) => -descendingComparator(a,b,orderBy)
    // }
    
    // const sortedRowInformation =(rowArray, comparator) =>{
    //     const stabilizedRowArr = rowArray.map((ele, i)=>[ele, i])
    //     stabilizedRowArr.sort((a,b) =>{
    //         const order = comparator(a[0], b[0])
    //         if(order !==0) return order
    //         return a[1]-b[1]
    //     })
    //     return stabilizedRowArr.map(ele => ele[0])
    // }    

    return (             
        <TableContainer className={classes.table} component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell key="id">
                            <b style={{color:'#173f5f'}}>Order count</b>
                        </TableCell> 

                        <TableCell key="name">
                            <b style={{color:'#173f5f'}}>Number of orders</b>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        Object.keys(props.orderFrequency).map((ele, i)=>(
                            <TableRow key={i} >
                                <TableCell>
                                    {ele}
                                </TableCell>
                                <TableCell>
                                {props.orderFrequency[ele]}
                                </TableCell>
                            </TableRow>
                        ))
                    } 
                </TableBody>
            </Table>
        </TableContainer>
            
     );
}
 
export default OrdersTable;