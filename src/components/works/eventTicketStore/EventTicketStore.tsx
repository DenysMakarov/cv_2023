import React, {FC} from 'react';
import {titleObj} from "../../pages/portfolio/LeftBlock";

type RightBlockProps = {
    num: number
}

const EventTicketStore: FC<RightBlockProps> = ({num}) => {

    return (
        <div className='event restaurant'>

            <div className='wrapper-box'>
                <div className="hd">
                    <div className="hd-img" onClick={() => window.location.href=titleObj[0].link}/>
                </div>
                <div className="tablet" >
                    <div className="tablet-img" onClick={() => window.location.href=titleObj[0].link}/>
                </div>
                <div className="mobile">
                    <div className="mobile-img" onClick={() => window.location.href=titleObj[0].link}/>
                </div>

                {
                    num === 1 ?
                        <div className='definer definer-f'>
                            Front-End
                        </div>
                        :
                        <div className='definer definer-b'>
                            Back-End
                        </div>
                }

            </div>
        </div>
    );
};

export default EventTicketStore;