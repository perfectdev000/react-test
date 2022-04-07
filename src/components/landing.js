import React from 'react';
import { makeStyles } from '@mui/styles';
import Top from './top';
import Bottom from './bottom';
import Header from './header';
import 'bootstrap/dist/css/bootstrap.min.css';

function Landing (props) {     

    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Header />
            <Top />
            <Bottom />
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    container: {
        width: '100%',
        maxWidth: 1831,
        position: 'absolute',
        top: 0
    }
}));

export default Landing;