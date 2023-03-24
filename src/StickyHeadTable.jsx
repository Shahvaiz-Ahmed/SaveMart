import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export default function StickyHeadTable(props) {
const columns = [
  { id: 'ITEMID', label: 'Item ID', minWidth: 0 },
  { id: 'NAME', label: 'NAME', minWidth: 250 },
  {
    id: 'SALESPRICE',
    label: 'Price Inc. Tax',
    minWidth: 0,
  },
];

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden', color: '#011C66', fontSize: '0.7rem' }}>
      <TableContainer sx={{ maxHeight: 440 }} style={{ overflowX: 'hidden' }}>
        <Table stickyHeader aria-label="sticky table" >
          <TableHead style={{ overflowX: 'hidden'}}>
            <TableRow style={{ }} >
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth , color: '#011C66',fontWeight: 600, fontSize: 'large', textAlign: 'initial', paddingLeft: 0 }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.dataValue.map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code} style={{color: '#011C66', position: 'relative', left: '1rem'}}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align} style={{color: '#011C66', padding: '0rem'}}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
          </Paper>
  );
}