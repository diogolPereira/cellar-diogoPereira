import React, { Fragment } from 'react'
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import { useNavigate } from 'react-router';

function BottleList({bottles}) {
    const navigate = useNavigate()

    const handleClick = id => {
        navigate(''+id)
    }

    return (
        <Fragment>
            <TableContainer >
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell >Price</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    { bottles.map(bottle => ( 
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
                        </TableRow>
                       ))}
                   </TableBody>
                </Table>
            </TableContainer>
        </Fragment>
    )
}

export default BottleList
