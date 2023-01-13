import {memo} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { FILM_TYPE } from '../utils/types';

type Props = {
    rows: FILM_TYPE[]
}
const FilmTable = ({rows}: Props) => {
    return (
        <>
            <TableContainer component={Paper}  >
                <Table >
                    <TableHead>
                    <TableRow>
                        <TableCell> Title</TableCell>
                        <TableCell > Characters  </TableCell>
                        <TableCell > Planets </TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.title}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.title}
                                </TableCell>
                                <TableCell sx={{verticalAlign: 'baseline'}} >
                                    <Typography variant='body2' >
                                        {row.characters.length}
                                    </Typography>
                                    {row.characters.map((el, index) => (
                                        <Typography key={`${el}_${index}`} variant='body2' >
                                            {el}
                                        </Typography>
                                    ))}
                                </TableCell>
                                <TableCell sx={{verticalAlign: 'baseline'}} >
                                    <Typography variant='body2' >
                                        {row.planets.length}
                                    </Typography>
                                    {row.planets.map((el, index) => (
                                        <Typography key={`${el}_${index}`} variant='body2' >
                                            {el}
                                        </Typography>
                                    ))}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}
export default memo(FilmTable)