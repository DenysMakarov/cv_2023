import React, {FC} from 'react';


const Restaurant : FC = () => {
    return (
        <div className='restaurant'>

            <div className="hd">
                <div className="hd-img"/>
            </div>
            <div className="tablet">
                <div className="tablet-img"/>
            </div>
            <div className="mobile">
                <div className="mobile-img"/>
            </div>
            
        </div>
    );
};

export default Restaurant;