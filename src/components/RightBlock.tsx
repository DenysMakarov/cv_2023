import React, {FC, useEffect} from 'react';
import Restaurant from "./works/restaurant/Restaurant";
import ShoesStore from "./works/shoesStore/ShoesStore";
import EventTicketStore from "./works/eventTicketStore/EventTicketStore";
import Slider from "./works/slider/Slider";
import Game from "./works/game/Game";


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

    const renderSwitch = (num: number) =>{
        switch (num) {
            case 1 : return <EventTicketStore num={num}/>
            case 2 : return <EventTicketStore num={num}/>
            case 3 : return <ShoesStore/>
            case 4 : return <Restaurant/>
            case 5 : return <Slider/>
            case 6 : return <Game/>
            default : return <div>Hello</div>
        }
    }

    return (
        <div className='right-block'>
            {
                renderSwitch(num)
            }
        </div>
    );
};

export default RightBlock;