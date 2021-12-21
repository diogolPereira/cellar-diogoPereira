import React, { Fragment } from 'react'
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Box from '@mui/material/Box';
import { visuallyHidden } from '@mui/utils';
import { useNavigate } from 'react-router';

/** Comparator functions default */
function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }
  
function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

const headCells = [
    {
      id: 'name',
      label: 'Nome',
    },
    {
      id: 'price',
      label: 'Preço',
    },
    {
      id: 'year',
      label: 'Ano',
    },
];

/** Header of table */
function TableHeader(props) {
    const {  order, orderBy, onRequestSort } =
      props;
    const createSortHandler = (property) => (event) => {
      onRequestSort(event, property);
    };
  
    return (
      <TableHead>
        <TableRow>
          {headCells.map((headCell) => (
            <TableCell
              key={headCell.id}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </Box>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }



function BottleList({bottles}) {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');

  
    const navigate = useNavigate()

    const handleClick = id => {
        navigate(''+id)
    }

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
      };
    return (
        <Fragment>
            <TableContainer >
                <Table>
                    <TableHeader
                        order={order}
                        orderBy={orderBy}
                        onRequestSort={handleRequestSort}
                    />
                    <TableBody>
                    { bottles.sort(getComparator(order,orderBy)).map(bottle => ( 
                        <TableRow
                           hover
                           onClick={() => handleClick( bottle.id)}
                           key={bottle.id}
                           sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                           <TableCell scope="row">
                               {bottle.name}
                           </TableCell>
                           <TableCell >{bottle.price}</TableCell>
                           <TableCell >{bottle.year}</TableCell>
                        </TableRow>
                       ))}
                   </TableBody>
                </Table>
            </TableContainer>
        </Fragment>
    )
}

export default BottleList
