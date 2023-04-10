import React from 'react';
import {titleObj} from "../../../pages/portfolio/LeftBlock";

const Slider = () => {

    return (
        <div className='slider restaurant'>

            <div className='wrapper-box'>
                <div className="hd">
                    <div className="hd-img" onClick={() => window.location.href=titleObj[4].link}/>
                </div>
                <div className="tablet">
                    <div className="tablet-img" onClick={() => window.location.href=titleObj[4].link}/>
                </div>
            </div>
        </div>
    );
};

export default Slider;