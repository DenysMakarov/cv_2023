import React, {FC} from 'react';
import {titleObj} from "../../pages/portfolio/LeftBlock";


const Restaurant : FC = () => {
    return (
        <div className='restaurant'>

            <div className='wrapper-box'>
                <div className="hd">
                    <div className="hd-img" onClick={() => window.location.href=titleObj[3].link}/>
                </div>
                <div className="tablet">
                    <div className="tablet-img" onClick={() => window.location.href=titleObj[3].link}/>
                </div>
                <div className="mobile">
                    <div className="mobile-img" onClick={() => window.location.href=titleObj[3].link}/>
                </div>
            </div>

            
        </div>
    );
};

export default Restaurant;