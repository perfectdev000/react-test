import React, {  } from 'react';
import Socials from './Socials';

function PartUpRight (props) {    

    return (
        <React.Fragment>
            <div className='w-full h-[908px] relative min-w-[750px] bg-center' 
                style={{
                    backgroundImage: 'url("/img/img01.png")',
                    backgroundSize: 'cover'
                }}
            >
                <Socials/>

                <div className='relative mt-56 pt-2 ml-28 pl-2 text-[75px] leading-[70px] w-auto'>
                    <div className='bg-white w-fit mb-1 text-gray-700 font-normal'>
                        &nbsp;CREATING A&nbsp;
                    </div>

                    <div className='bg-white w-fit mb-1 text-[#0D3678] font-black'>
                        &nbsp;BOLDER&nbsp;
                    </div>

                    <div className='bg-white w-fit mb-1 text-[#0D3678] font-black'>
                        &nbsp;DIGITAL FUTURE&nbsp;
                    </div>

                    <div className='bg-white w-fit mb-1 text-gray-700 font-normal'>
                        &nbsp;TOGETHER&nbsp;
                    </div>

                    <div className='w-[443px] h-2.5 bg-[#DDFA00] mt-10'></div>

                    <button className='flex justify-center items-center py-4 px-8 bg-[#67B6FC] rounded-[10px] mt-12 ml-8'
                        onClick={()=>alert('clicked')}
                    >
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.3913 1.57221e-05C14.6812 0.00448157 11.067 1.20543 8.06348 3.43184C5.05993 5.65825 2.82014 8.79661 1.66304 12.4H4.14391C5.40851 9.03356 7.77499 6.21893 10.8408 4.43493C13.9066 2.65094 17.4823 2.00777 20.9597 2.61486C24.437 3.22194 27.6013 5.04177 29.9141 7.76476C32.2269 10.4878 33.5454 13.9457 33.6453 17.5504C33.7452 21.1551 32.6203 24.6838 30.4621 27.5363C28.3038 30.3888 25.2455 32.3888 21.8073 33.1962C18.3691 34.0036 14.7635 33.5684 11.6038 31.9647C8.44415 30.361 5.92556 27.6879 4.47652 24.4H1.95652C3.0984 27.4684 5.03945 30.1591 7.5696 32.181C10.0998 34.2029 13.1227 35.479 16.3112 35.8711C19.4997 36.2633 22.7325 35.7566 25.6596 34.4058C28.5867 33.0551 31.0967 30.9118 32.9179 28.2078C34.7392 25.5039 35.8024 22.3423 35.9924 19.0651C36.1824 15.788 35.4921 12.5201 33.9961 9.61514C32.5001 6.71018 30.2554 4.27876 27.5049 2.584C24.7544 0.889237 21.6028 -0.00432257 18.3913 1.57221e-05ZM12.4357 11.2L17.7183 17.2H0V19.6H17.7183L12.4357 25.6L14.173 27.2L21.2165 19.2C21.4006 18.9759 21.5015 18.6926 21.5015 18.4C21.5015 18.1074 21.4006 17.8241 21.2165 17.6L14.173 9.60002L12.4357 11.2Z" fill="white"/>
                        </svg>

                        <p className='ml-7 mr-6 text-white text-[26px] leading-[26px] font-bold'>
                            GET INVOLVED
                        </p>

                    </button>
                </div>

                
                <div className='absolute bottom-0 right-[120px] '>
                        <div className='w-[149px] h-[57px] ml-[540px] text-[26px] text-white font-bold flex justify-around items-center' 
                            style={{background:'rgba(255, 255, 255, 0.3)'}}
                        >
                            <svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.52447 0L0.336695 9.08471C0.122688 9.3392 0.00537109 9.66087 0.00537109 9.99319C0.00537109 10.3255 0.122688 10.6472 0.336695 10.9017L8.52447 19.9864L10.5441 18.1694L4.40329 11.3559H25.0183V8.63048H4.40329L10.5441 1.81694L8.52447 0Z" fill="white"/>
                            </svg>

                            <div>01</div>

                            <svg className='rotate-180' width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.52447 0L0.336695 9.08471C0.122688 9.3392 0.00537109 9.66087 0.00537109 9.99319C0.00537109 10.3255 0.122688 10.6472 0.336695 10.9017L8.52447 19.9864L10.5441 18.1694L4.40329 11.3559H25.0183V8.63048H4.40329L10.5441 1.81694L8.52447 0Z" fill="white"/>
                            </svg>

                        </div>
                    </div>

            </div>
        </React.Fragment>
    );
}

export default PartUpRight;