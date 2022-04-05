import React, {  } from 'react';

function Logos2 (props) {    

    return (
        <React.Fragment>
            <div className='min-w-[372px] max-w-[372px] h-full bg-white flex items-center justify-center relative z-10'>
                <div>
                    <div className='hover:cursor-pointer' onClick={()=>alert('clicked!')}>
                        <img src='/img/image 91.png' alt='logos'/>
                    </div>
                    <div className='hover:cursor-pointer' onClick={()=>alert('clicked!')}>
                        <img src='/img/image 90.png' alt='logos'/>
                    </div>
                    <div className='hover:cursor-pointer' onClick={()=>alert('clicked!')}>
                        <img src='/img/image 92.png' alt='logos'/>
                    </div>
                    <div className='hover:cursor-pointer' onClick={()=>alert('clicked!')}>
                        <img src='/img/image 89.png' alt='logos'/>
                    </div>
                    <div className='hover:cursor-pointer ml-12' onClick={()=>alert('clicked!')}>
                        <img src='/img/image 93.png' alt='logos'/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Logos2;