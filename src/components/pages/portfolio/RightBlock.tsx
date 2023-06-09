import React, {FC, useEffect} from 'react';
import Restaurant from "../../works/restaurant/Restaurant";
import ShoesStore from "../../works/shoesStore/ShoesStore";
import EventTicketStore from "../../works/eventTicketStore/EventTicketStore";
import Slider from "../../works/slider/Slider";
import Game from "../../works/game/Game";
import ThisPage from "../../works/thisPage/ThisPage";
import {useStore} from "../../../hooks/useStore";
import {observer} from "mobx-react";



const RightBlock : FC= observer(() => {

    const switcher = useStore('workToggle')

        const renderSwitch = (num: number) =>{
        switch (num) {
            case 1 : return <EventTicketStore num={num}/>
            case 2 : return <EventTicketStore num={num}/>
            case 3 : return <ShoesStore/>
            case 4 : return <Restaurant/>
            case 5 : return <Slider/>
            case 6 : return <Game/>
            case 7 : return <ThisPage/>
            default : return <div>Hello</div>
        }
    }

    return (
        <div className='right-block'>
            {
                renderSwitch(switcher.count)
            }
        </div>
    )
})

export default RightBlock;