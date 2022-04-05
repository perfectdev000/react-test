import React, {  } from 'react';

function PartUpLeft (props) {    

    return (
        <React.Fragment>
            <div className='min-w-[157px] bg-[#F9F9F9] py-6'>
                <div className='w-[111px] h-[70px] mx-auto pt-6 bg-gray-500 text-center'>
                    Logo
                </div>

                <div className='w-full h-[74px] flex justify-center items-center mt-6' style={{backgroundColor:'#0D3678'}}>
                    <svg width="38" height="23" viewBox="0 0 38 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="36.5714" height="2.28571" fill="black"/>
                        <rect x="0.5" y="0.5" width="36.5714" height="2.28571" fill="url(#paint0_linear_65_117)"/>
                        <rect x="0.5" y="0.5" width="36.5714" height="2.28571" stroke="url(#paint1_linear_65_117)"/>
                        <rect x="0.5" y="10.3569" width="36.5714" height="2.28571" fill="black"/>
                        <rect x="0.5" y="10.3569" width="36.5714" height="2.28571" fill="url(#paint2_linear_65_117)"/>
                        <rect x="0.5" y="10.3569" width="36.5714" height="2.28571" stroke="url(#paint3_linear_65_117)"/>
                        <rect x="0.5" y="20.2144" width="36.5714" height="2.28571" fill="black"/>
                        <rect x="0.5" y="20.2144" width="36.5714" height="2.28571" fill="url(#paint4_linear_65_117)"/>
                        <rect x="0.5" y="20.2144" width="36.5714" height="2.28571" stroke="url(#paint5_linear_65_117)"/>
                        <defs>
                        <linearGradient id="paint0_linear_65_117" x1="18.7857" y1="0" x2="18.7857" y2="3.28571" gradientUnits="userSpaceOnUse">
                        <stop stop-color="white"/>
                        <stop offset="1" stop-color="white" stop-opacity="0"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear_65_117" x1="18.7857" y1="0" x2="18.7857" y2="3.28571" gradientUnits="userSpaceOnUse">
                        <stop stop-color="white"/>
                        <stop offset="1" stop-color="white" stop-opacity="0"/>
                        </linearGradient>
                        <linearGradient id="paint2_linear_65_117" x1="18.7857" y1="9.85693" x2="18.7857" y2="13.1426" gradientUnits="userSpaceOnUse">
                        <stop stop-color="white"/>
                        <stop offset="1" stop-color="white" stop-opacity="0"/>
                        </linearGradient>
                        <linearGradient id="paint3_linear_65_117" x1="18.7857" y1="9.85693" x2="18.7857" y2="13.1426" gradientUnits="userSpaceOnUse">
                        <stop stop-color="white"/>
                        <stop offset="1" stop-color="white" stop-opacity="0"/>
                        </linearGradient>
                        <linearGradient id="paint4_linear_65_117" x1="18.7857" y1="19.7144" x2="18.7857" y2="23.0001" gradientUnits="userSpaceOnUse">
                        <stop stop-color="white"/>
                        <stop offset="1" stop-color="white" stop-opacity="0"/>
                        </linearGradient>
                        <linearGradient id="paint5_linear_65_117" x1="18.7857" y1="19.7144" x2="18.7857" y2="23.0001" gradientUnits="userSpaceOnUse">
                        <stop stop-color="white"/>
                        <stop offset="1" stop-color="white" stop-opacity="0"/>
                        </linearGradient>
                        </defs>
                    </svg>
                </div>

                <div className='w-[100px] mx-auto pt-10 pb-8 border-b flex justify-center items-center hover:cursor-pointer' onClick={()=>alert('clicked')}>
                    <img src='/img/logo01.png' alt='logos'/>
                </div>

                <div className='w-[100px] mx-auto pt-10 pb-8 border-b flex justify-center items-center hover:cursor-pointer' onClick={()=>alert('clicked')}>
                    <img src='/img/logo02.png' alt='logos'/>
                </div>

                <div className='w-[100px] mx-auto pt-10 pb-8 border-b flex justify-center items-center hover:cursor-pointer' onClick={()=>alert('clicked')}>
                    <img src='/img/logo03.png' alt='logos'/>
                </div>

                <div className='w-[100px] mx-auto pt-10 pb-8 border-b flex justify-center items-center hover:cursor-pointer' onClick={()=>alert('clicked')}>
                    <img src='/img/logo04.png' alt='logos'/>
                </div>

                <div className='w-[100px] mx-auto pt-10 pb-8 border-b flex justify-center items-center hover:cursor-pointer' onClick={()=>alert('clicked')}>
                    <img src='/img/logo05.png' alt='logos'/>
                </div>
            </div>
        </React.Fragment>
    );
}

export default PartUpLeft;