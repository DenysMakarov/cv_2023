import React, {FC, useState} from 'react';
import LeftBlock from "./LeftBlock";
import RightBlock from "./RightBlock";


const Content : FC = () => {
    const [num, setNum] = useState<number>(6)

    return (
        <section className='content'>
            <LeftBlock num={num} setNum={setNum} />
            <RightBlock num={num}/>
        </section>
    );
};

export default Content;