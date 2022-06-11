import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const TableComponent: React.FC<any> = function ({ data }) {
  return (
    <TableContainer
      component={Paper}
      sx={{ backgroundColor: '#616161', borderRadius: '0', marginTop: '20px' }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <caption>Continue...</caption>
        <TableHead>
          <TableRow>
            <TableCell align="center">Number</TableCell>
            <TableCell align="center">ID</TableCell>
            <TableCell align="left">Full name</TableCell>
            <TableCell align="center">Address</TableCell>
            <TableCell align="center">Phone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row: any, idx: number) => (
            <TableRow key={row.id}>
              <TableCell align="center" component="th" scope="row">
                {idx + 1}
              </TableCell>
              <TableCell align="center">{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell align="center">
                {`${row.address.code} `}
                {row.address.city}
                {row.address.address}
              </TableCell>
              <TableCell align="left">{row.phone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
