import React, {FC} from 'react';

type RightBlockProps = {
    num: number
}

const EventTicketStore: FC<RightBlockProps> = ({num}) => {
    return (
        <div className='event restaurant'>

            <div className='wrapper-box'>
                <div className="hd">
                    <div className="hd-img"/>
                </div>
                <div className="tablet">
                    <div className="tablet-img"/>
                </div>
                <div className="mobile">
                    <div className="mobile-img"/>
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