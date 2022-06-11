import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import getData from '../../api/get-data';

const TableComponent: React.FC<any> = function ({
  data,
  command,
  setData,
  page,
  setPage,
}) {
  async function handleScroll(e: any) {
    const heightOneRow = 53;
    const countVisibleRows = Math.round(e.target.clientHeight / heightOneRow);
    const countInvisibleRows = Math.round(e.target.scrollTop / heightOneRow);
    if (countVisibleRows + countInvisibleRows >= data.length - 1) {
      setPage();

      const addedData = await getData(command, page);

      setData(addedData);
    }
  }

  return (
    <TableContainer
      component={Paper}
      // eslint-disable-next-line react/jsx-no-bind
      onScroll={handleScroll}
      style={{ height: '50vh' }}
      sx={{
        backgroundColor: '#616161',
        borderRadius: '0',
        marginTop: '20px',
        overflowy: 'scroll',
      }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <TableHead
          sx={{ position: 'sticky', top: 0, backgroundColor: '#616161' }}
        >
          <TableRow>
            <TableCell align="center">Number</TableCell>
            <TableCell align="center">ID</TableCell>
            <TableCell align="left">Full name</TableCell>
            <TableCell align="center">Address</TableCell>
            <TableCell align="center">Phone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.length === 0
            ? null
            : data.map((row: any, idx: number) => (
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
