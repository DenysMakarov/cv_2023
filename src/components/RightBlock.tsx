import React, {FC, useEffect} from 'react';
import Restaurant from "./works/Restaurant";


type ImgBlock = {
    title: string
}

const imgArr : ImgBlock[] = [
    {title: '1'},
    {title: '1'},
    {title: '1'},
    {title: '1'},
    {title: '1'},
]

type RightBlockProps = {
    num: number
}

const RightBlock: FC<RightBlockProps> = ({num}) => {

    // useEffect(() => {
    //     console.log(num)
    // }, [num])

    return (
        <div className='right-block'>
            <Restaurant/>
        </div>
    );
};

export default RightBlock;