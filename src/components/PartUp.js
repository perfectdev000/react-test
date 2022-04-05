import React, {  } from 'react';
import PartUpLeft from './PartUpLeft'
import PartUpRight from './PartUpRight'

function PartUp (props) {    

    return (
        <React.Fragment>
            <div className='w-full flex'>
                <PartUpLeft/>

                <PartUpRight/>
            </div>
        </React.Fragment>
    );
}

export default PartUp;