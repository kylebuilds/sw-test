import {memo, useCallback, useState} from 'react'
import clsx from 'clsx'
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import CssBaseline from '@mui/material/CssBaseline';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import { useLazyQuery } from '@apollo/client';
import { allFilms } from './utils/gql';
import FilmTable from './components/FilmTable';
import FilmReleaseTimeLine from './components/FilmReleaseTimeLine';
import MainLayout from './layout/MainLayout';
import { parseFilms } from './utils/parse';
import './App.css';
const App = () => {
    const [ landing, setLanding] = useState(true)
    const [getAllFilms, { loading, error, data }] = useLazyQuery(allFilms);
    const onLoad = useCallback(() => {
        setLanding(false)
        getAllFilms()
    }, [])
    const rows = parseFilms(data)
    return (
        <>
            <CssBaseline />
            <MainLayout loading={loading} onLoad={onLoad} />
            {(landing || error)? (
                <Box className={clsx('flex', 'justify-center')} sx={{height: '100vh', width: '100vw', }} >
                    <Typography color='text.secondary'>
                       {landing? 'Welcome to StarWars': 'Loading Error'}
                    </Typography>
                </Box>
            ): (
                <>
                    {loading? (
                        <Box className={clsx('flex', 'justify-center')} sx={{height: '100vh', width: '100vw', }} >
                            <CircularProgress sx={{mt: -4}} size={36} />
                        </Box>
                    ): (
                        <Box sx={{px: 2, pt: 2}} className={clsx('full-width')}>
                            <Toolbar />
                            <Grid container spacing={2}>
                                <Grid xs={12} md={6}>
                                    <FilmTable rows={rows} />
                                </Grid>
                                <Grid xs={12} md={6}>
                                    <FilmReleaseTimeLine rows={rows}  />
                                </Grid>
                            </Grid>
                        </Box>
                    )}
                </>
            )}
        </>
    )
}
export default memo(App)