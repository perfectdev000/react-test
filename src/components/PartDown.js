import React, {  } from 'react';
import Logos2 from './Logos2';
import XXX from './XXX';
// import PartUpLeft from './PartUpLeft'
// import PartUpRight from './PartUpRight'

function PartDown (props) {    

    return (
        <React.Fragment>
            <div className='relative w-full h-[918px] flex overflow-hidden bg-[#0D3678] md:flex justify-start'>
                <div className='min-w-[1152px] relative'>
                    <Logos2/>
                    <XXX/>
                </div>
                
                <div className='text-white flex items-center -ml-40'>
                    <div className='w-[600px]'>
                        <div className='text-[45px] leading-10 font-normal'>
                            ALREADY <b className='font-black'>ON BOARD</b><br/>
                            FOR <b>2021</b>
                        </div>

                        <div className='bg-[#DDFA00] h-2.5 w-[468px] mt-10'></div>

                        <div className='text-[20px] leading-[26px] font-normal mt-12'>
                            <b className='font-extrabold'>Injazat</b> is an industry recognized market leader in the region for digital transformation, cloud and cyber security.
                            <br/><br/>
                            Injazat empowers organizations to optimize their business goals utilizing cloud and emerging technology solutions, and by co-creating transformational digital platforms and services through public-private partnerships (PPP).
                            <br/><br/>
                            Headquartered in Abu Dhabi, the Capital of the United Arab Emirates, Injazat draws on its local expertise and presence combined with several global technology partnership networks to develop market leading services. Injazat’s purpose is to empower human achievement through end-to-end digital solutions that deliver impact and value for our customers and communities.
                        </div>
                    </div>
                </div>
                
            </div>
        </React.Fragment>
    );
}

export default PartDown;