import {memo, useCallback, useState} from 'react'
import clsx from 'clsx'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

type  Props = {
    loading: boolean
    onLoad: (evt: any) => void
}
const MainLayout = ({loading, onLoad}: Props) => {
    return (
        <>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        StarWars GraphQL Test App
                    </Typography>
                    <Button color="inherit" disabled={loading} onClick={onLoad}> Load now </Button>
                </Toolbar>
            </AppBar>
        </>
    )
}
export default memo(MainLayout)