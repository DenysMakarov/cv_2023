import React, {FC} from 'react';
import {titleObj} from "../../pages/portfolio/LeftBlock";

const cardArr : string[] = [
    'card_1',
    'card_2',
    'card_3',
    'card_4',
    'card_5',
    'card_6',
    'card_7',
    'card_8',
]

// get images from server / static in development
const images = cardArr.map((imageName) => require(`../../../assest/img/game/${imageName}.jpg`));

const Game:FC = () => {

    const zIndexPos : number = 2000

    return (
        <div className='game restaurant'>

            <div className='wrapper-box'>
                <div className="hd">
                    <div className="hd-img" onClick={() => window.location.href=titleObj[5].link}/>
                </div>

                <div className='card-box'>
                    {
                        images.map((card, idx) => (
                            <div className='card' key={idx}

                                style={{
                                    left: `${idx*10}%`,
                                    zIndex: `${zIndexPos - (100 * (idx+1))}`,
                                    backgroundImage: `url(${card})`,
                                    animationDelay: `.${idx+2}s`
                                }}
                            />
                        ))
                    }
                </div>

            </div>
        </div>
    );
};

export default Game;