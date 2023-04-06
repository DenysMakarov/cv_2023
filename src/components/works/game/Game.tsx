import React from 'react';
import backgroundImage from '../../../assest/img/game/card_1.jpg';


type Card = {
    imgPath: string
}

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

const zIndexPos : number = 2000

// get images from server / static in development
const images = cardArr.map((imageName) => require(`../../../assest/img/game/${imageName}.jpg`));

const Game = () => {
    return (
        <div className='game restaurant'>

            <div className='wrapper-box'>
                <div className="hd">
                    <div className="hd-img"/>
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

                {/*<div className="tablet card">*/}
                {/*    <div className="tablet-img"/>*/}
                {/*</div>*/}
            </div>
        </div>
    );
};

export default Game;