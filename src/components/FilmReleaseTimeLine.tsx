import { memo } from 'react';
import moment from 'moment';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import { FILM_TYPE } from '../utils/types';
type Props = {
    rows: FILM_TYPE[]
}
const FilmReleaseTimeline = ({rows}: Props) => {
    return (
        <List component={Paper}>
            {rows.map(el => (
                 <ListItem key={el.title}>
                     <ListItemText primary={el.title} secondary={moment(el.releaseDate).format('MM/DD/YYYY hh:mm A')}  />
                 </ListItem>
            ))}
        </List>
    )
}
export default memo(FilmReleaseTimeline)