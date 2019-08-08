import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TestObj from '../../test-data/testObj'

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

let myObj = TestObj;
  if(window.obj !== undefined)
    myObj = window.obj ;

function createData(type, amount) {
  return { type, amount };
}

const rows = [
  createData('Minimum Traffic',myObj.min_traffic),
  createData('Maximum Traffic',myObj.max_traffic),
];

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 200,
  },
}));

export default function TrafficTable() {
  const classes = useStyles();


  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <StyledTableCell>Data Traffic</StyledTableCell>
            <StyledTableCell align="right"> Time (24)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <StyledTableRow key={row.type}>
              <StyledTableCell component="th" scope="row">
                {row.type}
              </StyledTableCell>
              <StyledTableCell align="right">{row.amount}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
