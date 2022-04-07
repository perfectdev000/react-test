import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import adda from '../assets/images/adda.png';
import dewa from '../assets/images/dewa.png';
import infobip from '../assets/images/infobip.png';
import zoho from '../assets/images/zoho.png';
import kaspersky from '../assets/images/kaspersky.png';
import bottom_bg from '../assets/images/bottom_bg.png';
import vector from '../assets/images/vector.png';

const Bottom = (props) => {

    //----- Internal States -----
    const [navDisplay, setNavDisplay] = useState('flex');

    //----- Custom Functions -----
    const clickNav = (name) => {
        alert(name + ' is clicked.');
    }

    const classes = useStyles();

    //----- Render -----
    return (
        <React.Fragment>
            <div className={classes.container}>
                <div className={classes.leftnav}>
                    <div className={classes.navItem}>
                        <img src={zoho} alt='zoho' onClick={() => clickNav('zoho')}/>
                    </div>
                    <div className={classes.navItem}>
                        <img src={infobip} alt='infobip' onClick={() => clickNav('infobip')} />
                    </div>
                    <div className={classes.navItem}>
                        <img src={kaspersky} alt='kaspersky' onClick={() => clickNav('kaspersky')} />
                    </div>
                    <div className={classes.navItem}>
                        <img src={adda} alt='adda' onClick={() => clickNav('adda')} />
                    </div>
                    <div className={classes.navItem}>
                        <img src={dewa} alt='dewa' onClick={() => clickNav('dewa')} />
                    </div>
                </div>
                <div className={classes.slidebox}> 
                    <div className={classes.slideContainer}>
                        <div className={classes.vector}>
                            <img src={vector} alt='vector'/>
                        </div>
                        <div className={classes.contentBox}>
                            <div className={classes.title}>
                                <span>ALREADY</span>&nbsp;
                                <span style={{fontWeight: 900}}>ON BOARD</span><br/>
                                <span>FOR</span>&nbsp;
                                <span className={classes.year} style={{fontWeight: 900}}>2021</span>
                            </div>
                            <div className={classes.bar}/>
                            <div className={classes.detail}>
                            <span style={{fontWeight: 900}}>Injazat </span>is an industry recognized market leader in the region for digital transformation, cloud and cyber security.<br/><br/>
                            Injazat empowers organizations to optimize their business goals utilizing cloud and emerging technology solutions, and by co-creating transformational digital platforms and services through public-private partnerships (PPP).<br/><br/>
                            Headquartered in Abu Dhabi, the Capital of the United Arab Emirates, Injazat draws on its local expertise and presence combined with several global technology partnership networks to develop market leading services. Injazat's purpose is to empower human achievement through end-to-end digital solutions that deliver impact and value for our customers and communities.<br/>
                            </div>
                        </div>
                    </div>                
                    <div className={classes.paginationBox}>
                        <span onClick={()=>alert('Prev is Clicked.')}>
                            <svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.52447 0L0.336695 9.08472C0.122688 9.3392 0.00537109 9.66087 0.00537109 9.99319C0.00537109 10.3255 0.122688 10.6472 0.336695 10.9017L8.52447 19.9864L10.5441 18.1694L4.40329 11.3559H25.0183V8.63048H4.40329L10.5441 1.81694L8.52447 0Z" fill="white"/>
                            </svg>
                        </span>
                        <span> 01 </span>
                        <span onClick={()=>alert('Next is Clicked.')}>
                            <svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.4755 0L24.6633 9.08471C24.8773 9.3392 24.9946 9.66087 24.9946 9.99319C24.9946 10.3255 24.8773 10.6472 24.6633 10.9017L16.4755 19.9864L14.4559 18.1694L20.5967 11.3559H-0.0182858V8.63048H20.5967L14.4559 1.81694L16.4755 0Z" fill="white"/>
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

const useStyles = makeStyles((theme) => ({
    container: {
        width: '100%',
        maxWidth: 1831,
        minHeight: 918,
        display: 'flex',
        '@media(max-width: 1000px)': {
            flexDirection: 'column-reverse',
        }
    },   
    leftnav: {
        width: 360,
        height: 918,
        padding: '47px 89px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        zIndex: 99,
        '@media(max-width: 1000px)': {
            width: '100%',
            height: 'fit-content'
        }
    },
    navItem: {
        width: 'fit-content',
        height: 170,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '& img': {
            cursor: 'pointer'
        },
        '@media(max-width: 1000px)': {
            height: 130,
        }
    },
    slidebox: {
        width: '100%',
        backgroundImage: `url(${bottom_bg})`,
        backgroundSize: 'auto 100%',
        fontFamily: 'Raleway',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '75px',
        lineHeight: '70px',
        color: '#3A3845',  
        '@media(max-width: 1670px)' : {
            background: '#0D3678'
        },
        '@media(max-width: 1050px)' : {
            fontSize: '50px'
        },
        '@media(max-width: 530px)' : {
            fontSize: '30px'
        },
        position: 'relative'
    },
    slideContainer: {
        width: '100%',
        minHeight: 918,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',        
        '@media(max-width: 1670px)' : {
            flexDirection: 'column'
        },
    },
    vector: {
        width: 513,
        height: 293,
        marginLeft: '-4vw',        
        '@media(max-width: 1670px)' : {
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            background: 'white',
            marginLeft: 0,
        },      
        '@media(max-width: 520px)' : {
            height: 200,
            '& img': {
                width: 300,
                height: 194
            }
        },
    },
    contentBox: {
        maxWidth: 600, 
        width: '90%',
        minHeight: 580, 
        background: '#0D3678', 
        marginRight: '4vw',    
        '@media(max-width: 1670px)' : {
            margin: '80px 0px'
        },
    },
    title: {
        fontFamily: 'Raleway',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '45px',
        color: 'white',
        '@media(max-width: 600px)': {
            fontSize: '40px',
            lineHeight: '50px'
        }
    },
    year: {
        fontSize: '55px',
        '@media(max-width: 600px)': {
            fontSize: '40px',
        }
    },
    bar: {
        width: '75%', 
        height: '11px', 
        background: '#DDFA00', 
        marginTop: 40
    },
    detail: {
        marginTop: 40,
        fontFamily: 'Raleway',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '20px',
        lineHeight: '26px',
        color: 'white'
    },
    paginationBox: {
        width: 149,
        height: 57,
        background: 'rgba(255, 255, 255, 0.3)',
        color: 'white',
        position: 'absolute',
        bottom: 0,
        left: '110px',
        fontSize: '26px',
        fontWeight: 'bold',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        '& span': {
            cursor: 'pointer'
        }
    }
}));

export default Bottom;