import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import every from '../assets/images/every.png';
import fintech from '../assets/images/fintech.png';
import future from '../assets/images/future.png';
import gitex from '../assets/images/gitex.png';
import marketing from '../assets/images/marketing.png';
import hero from '../assets/images/hero.png';

const Top = (props) => {

    //----- Internal States -----
    const [navDisplay, setNavDisplay] = useState('flex');

    //----- Custom Functions -----
    const toggleNav = () => {
        var browserWidth = window.innerWidth;
        if(browserWidth <= 760) {
            if(navDisplay === 'flex') 
                setNavDisplay('none');
            else
                setNavDisplay('flex');
        }
    }

    const clickNav = (name) => {
        alert(name + ' is clicked.');
        toggleNav();
    }

    //----- Lifecycle Events -----
    useEffect(() => {
        var browserWidth = window.innerWidth;
        if(browserWidth > 760) {
            setNavDisplay('flex');
        } else {
            setNavDisplay('none')
        }
    }, [])

    const classes = useStyles();

    //----- Render -----
    return (
        <React.Fragment>
            <div className={classes.container}>
                <div className={classes.leftnav} style={{display: navDisplay}}>
                    <div className={classes.navBtn} onClick={toggleNav}>
                        <svg width="38" height="23" viewBox="0 0 38 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="36.5714" height="2.28571" fill="black"/>
                            <rect x="0.5" y="0.5" width="36.5714" height="2.28571" fill="url(#paint0_linear_0_1)"/>
                            <rect x="0.5" y="0.5" width="36.5714" height="2.28571" stroke="url(#paint1_linear_0_1)"/>
                            <rect x="0.5" y="10.3569" width="36.5714" height="2.28571" fill="black"/>
                            <rect x="0.5" y="10.3569" width="36.5714" height="2.28571" fill="url(#paint2_linear_0_1)"/>
                            <rect x="0.5" y="10.3569" width="36.5714" height="2.28571" stroke="url(#paint3_linear_0_1)"/>
                            <rect x="0.5" y="20.2144" width="36.5714" height="2.28571" fill="black"/>
                            <rect x="0.5" y="20.2144" width="36.5714" height="2.28571" fill="url(#paint4_linear_0_1)"/>
                            <rect x="0.5" y="20.2144" width="36.5714" height="2.28571" stroke="url(#paint5_linear_0_1)"/>
                            <defs>
                            <linearGradient id="paint0_linear_0_1" x1="18.7857" y1="0" x2="18.7857" y2="3.28571" gradientUnits="userSpaceOnUse">
                            <stop stopColor="white"/>
                            <stop offset="1" stopColor="white" stopOpacity="0"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear_0_1" x1="18.7857" y1="0" x2="18.7857" y2="3.28571" gradientUnits="userSpaceOnUse">
                            <stop stopColor="white"/>
                            <stop offset="1" stopColor="white" stopOpacity="0"/>
                            </linearGradient>
                            <linearGradient id="paint2_linear_0_1" x1="18.7857" y1="9.85693" x2="18.7857" y2="13.1426" gradientUnits="userSpaceOnUse">
                            <stop stopColor="white"/>
                            <stop offset="1" stopColor="white" stopOpacity="0"/>
                            </linearGradient>
                            <linearGradient id="paint3_linear_0_1" x1="18.7857" y1="9.85693" x2="18.7857" y2="13.1426" gradientUnits="userSpaceOnUse">
                            <stop stopColor="white"/>
                            <stop offset="1" stopColor="white" stopOpacity="0"/>
                            </linearGradient>
                            <linearGradient id="paint4_linear_0_1" x1="18.7857" y1="19.7144" x2="18.7857" y2="23.0001" gradientUnits="userSpaceOnUse">
                            <stop stopColor="white"/>
                            <stop offset="1" stopColor="white" stopOpacity="0"/>
                            </linearGradient>
                            <linearGradient id="paint5_linear_0_1" x1="18.7857" y1="19.7144" x2="18.7857" y2="23.0001" gradientUnits="userSpaceOnUse">
                            <stop stopColor="white"/>
                            <stop offset="1" stopColor="white" stopOpacity="0"/>
                            </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div className={classes.navItem}>
                        <img src={gitex} alt='gitex' onClick={() => clickNav('gitex')}/>
                    </div>
                    <div className={classes.navItem}>
                        <img src={every} alt='every' onClick={() => clickNav('every')} />
                    </div>
                    <div className={classes.navItem}>
                        <img src={fintech} alt='fintech' onClick={() => clickNav('fintech')} />
                    </div>
                    <div className={classes.navItem}>
                        <img src={future} alt='future' onClick={() => clickNav('future')} />
                    </div>
                    <div className={classes.navItem}>
                        <img src={marketing} alt='marketing' onClick={() => clickNav('marketing')} />
                    </div>
                </div>
                <div className={classes.slidebox}>                    
                    <div className={classes.navBtn_m} onClick={toggleNav}>
                        <svg width="38" height="23" viewBox="0 0 38 23" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="36.5714" height="2.28571" fill="black"/>
                            <rect x="0.5" y="0.5" width="36.5714" height="2.28571" fill="url(#paint0_linear_0_1)"/>
                            <rect x="0.5" y="0.5" width="36.5714" height="2.28571" stroke="url(#paint1_linear_0_1)"/>
                            <rect x="0.5" y="10.3569" width="36.5714" height="2.28571" fill="black"/>
                            <rect x="0.5" y="10.3569" width="36.5714" height="2.28571" fill="url(#paint2_linear_0_1)"/>
                            <rect x="0.5" y="10.3569" width="36.5714" height="2.28571" stroke="url(#paint3_linear_0_1)"/>
                            <rect x="0.5" y="20.2144" width="36.5714" height="2.28571" fill="black"/>
                            <rect x="0.5" y="20.2144" width="36.5714" height="2.28571" fill="url(#paint4_linear_0_1)"/>
                            <rect x="0.5" y="20.2144" width="36.5714" height="2.28571" stroke="url(#paint5_linear_0_1)"/>
                            <defs>
                            <linearGradient id="paint0_linear_0_1" x1="18.7857" y1="0" x2="18.7857" y2="3.28571" gradientUnits="userSpaceOnUse">
                            <stop stopColor="white"/>
                            <stop offset="1" stopColor="white" stopOpacity="0"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear_0_1" x1="18.7857" y1="0" x2="18.7857" y2="3.28571" gradientUnits="userSpaceOnUse">
                            <stop stopColor="white"/>
                            <stop offset="1" stopColor="white" stopOpacity="0"/>
                            </linearGradient>
                            <linearGradient id="paint2_linear_0_1" x1="18.7857" y1="9.85693" x2="18.7857" y2="13.1426" gradientUnits="userSpaceOnUse">
                            <stop stopColor="white"/>
                            <stop offset="1" stopColor="white" stopOpacity="0"/>
                            </linearGradient>
                            <linearGradient id="paint3_linear_0_1" x1="18.7857" y1="9.85693" x2="18.7857" y2="13.1426" gradientUnits="userSpaceOnUse">
                            <stop stopColor="white"/>
                            <stop offset="1" stopColor="white" stopOpacity="0"/>
                            </linearGradient>
                            <linearGradient id="paint4_linear_0_1" x1="18.7857" y1="19.7144" x2="18.7857" y2="23.0001" gradientUnits="userSpaceOnUse">
                            <stop stopColor="white"/>
                            <stop offset="1" stopColor="white" stopOpacity="0"/>
                            </linearGradient>
                            <linearGradient id="paint5_linear_0_1" x1="18.7857" y1="19.7144" x2="18.7857" y2="23.0001" gradientUnits="userSpaceOnUse">
                            <stop stopColor="white"/>
                            <stop offset="1" stopColor="white" stopOpacity="0"/>
                            </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div className={classes.text}> CREATING A </div>
                    <div className={classes.text} style={{fontWeight: 900, color: '#0D3678'}}> BOLDER </div>
                    <div className={classes.text} style={{fontWeight: 900, color: '#0D3678'}}> DIGITAL FUTURE </div>
                    <div className={classes.text}> TOGETHER </div>
                    <div className={classes.bar}/>
                    <button className={classes.button} onClick={()=>alert('Get Involved is Clicked.')}>
                        <span>
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginTop: -5, marginRight: '10%'}}>
                                <path d="M18.3913 1.57221e-05C14.6812 0.00448157 11.067 1.20543 8.06348 3.43184C5.05993 5.65825 2.82014 8.79661 1.66304 12.4H4.14391C5.40851 9.03356 7.77499 6.21893 10.8408 4.43493C13.9066 2.65094 17.4823 2.00777 20.9597 2.61486C24.437 3.22194 27.6013 5.04177 29.9141 7.76476C32.2269 10.4878 33.5454 13.9457 33.6453 17.5504C33.7452 21.1551 32.6203 24.6838 30.4621 27.5363C28.3038 30.3888 25.2455 32.3888 21.8073 33.1962C18.3691 34.0036 14.7635 33.5684 11.6038 31.9647C8.44415 30.361 5.92556 27.6879 4.47652 24.4H1.95652C3.0984 27.4684 5.03945 30.1591 7.5696 32.181C10.0998 34.2029 13.1227 35.479 16.3112 35.8711C19.4997 36.2633 22.7325 35.7566 25.6596 34.4058C28.5867 33.0551 31.0967 30.9118 32.9179 28.2078C34.7392 25.5039 35.8024 22.3423 35.9924 19.0651C36.1824 15.788 35.4921 12.5201 33.9961 9.61514C32.5001 6.71018 30.2554 4.27876 27.5049 2.584C24.7544 0.889237 21.6028 -0.00432257 18.3913 1.57221e-05ZM12.4357 11.2L17.7183 17.2H0V19.6H17.7183L12.4357 25.6L14.173 27.2L21.2165 19.2C21.4006 18.9759 21.5015 18.6926 21.5015 18.4C21.5015 18.1074 21.4006 17.8241 21.2165 17.6L14.173 9.60002L12.4357 11.2Z" fill="white"/>
                            </svg>
                            GET INVOLVED
                        </span>
                    </button>
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
        minHeight: 908,
        display: 'flex'
    },   
    leftnav: {
        width: 157,
        height: 908,
        paddingTop: 118,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '@media(max-width: 760px)': {
            display: 'none',
            position: 'absolute',
            zIndex: 99,
            background: 'white'
        }
    },
    navBtn: {
        width: 157,
        height: 74,
        background: '#0D3678',
        marginBottom: 11,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '& svg': {
            cursor: 'pointer'
        }
    },
    navItem: {
        width: 99,
        height: 117,
        borderBottom: '1px solid #E4E4E4',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '& img': {
            cursor: 'pointer'
        }
    },
    slidebox: {
        width: '100%',
        backgroundImage: `url(${hero})`,
        backgroundPosition: 'top center',
        fontFamily: 'Raleway',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '75px',
        lineHeight: '70px',
        color: '#3A3845',
        padding: '225px 7%',
        '@media(max-width: 1050px)' : {
            fontSize: '50px'
        },
        '@media(max-width: 530px)' : {
            fontSize: '30px'
        },
        position: 'relative'
    },
    navBtn_m: {
        width: 157,
        height: 74,
        marginBottom: 11,
        alignItems: 'center',
        justifyContent: 'center',
        '& svg': {
            cursor: 'pointer'
        },
        position: 'absolute',
        top: '118px',
        left: '0px',
        display: 'none',
        '@media(max-width: 760px)': {
            display: 'flex'
        }
    },
    text: {
        background: 'white', 
        padding: '0px 24px', 
        width: 'fit-content',
        marginTop: 3
    },
    bar: {
        width: 443,
        height: 11,
        background: '#DDFA00',
        marginTop: 40,
        '@media(max-width: 1050px)': {
            width: '312px'
        },
        '@media(max-width: 530px)' : {
            width: '206px'
        },
    },
    button: {
        width: '353px',
        height: '68px',
        left: '299px',
        top: '601px',
        background: '#67B6FC',
        borderRadius: '10px',
        borderWidth: 0,
        marginLeft: 22,
        marginTop: 47,
        color: 'white',
        fontSize: '26px',
        '@media(max-width: 1050px)': {
            width: '250px',
            fontSize: '18px',
        }
    },
    paginationBox: {
        width: 149,
        height: 57,
        background: 'rgba(255, 255, 255, 0.3)',
        color: 'white',
        position: 'absolute',
        bottom: 0,
        right: '7%',
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

export default Top;