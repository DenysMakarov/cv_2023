import React, {FC, useEffect} from 'react';
import {useStore} from "../../../hooks/useStore";
import {observer} from "mobx-react";

interface TitleObj {
    title: string,
    desc: string,
    link: string,
    git: string
}

const titleObj: TitleObj[] = [
    {
        title: 'Event Ticket Store  |  Front-End',
        desc: 'React | Redux (Saga) | MobX | TypeScript | SCSS | Webpack',
        link: 'https://denysmakarov.github.io/Old_React/dist/#/',
        git: 'https://github.com/DenysMakarov/CV_FrontEnd_WRC'
    },
    {
        title: 'Event Ticket Store  |  Back-End',
        desc: 'Java, PostgresSql, Spring-Boot, Hibernate, JPA, Spring-Security, JWT',
        link: 'https://denysmakarov.github.io/Old_React/dist/#/',
        git: 'https://github.com/DenysMakarov/CV_BackAnd_WRC'
    },
    {
        title: 'Sneakers store', desc: 'Node.js | Express | JavaScript | Handlebars | Jwt',
        link: 'https://denysmakarov.github.io/New_CV_SneakersShop/dist/index.html',
        git: 'https://github.com/DenysMakarov/New_CV_SneakersShop'},
    {
        title: 'Restaurant', desc: 'JavaScript | Scss | Html | Webpack',
        link: 'https://denysmakarov.github.io/New_CV_restaurant/dist/',
        git: 'https://github.com/DenysMakarov/New_CV_restaurant'},
    {
        title: 'Slider Library', desc: 'JavaScript | Html | CSS -> You can buy it on www.codester.com',
        link: 'https://www.codester.com/items/preview/20183/magicslider-javascript-css-html',
        git: 'https://www.codester.com/items/preview/20183/magicslider-javascript-css-html'},
    {
        title: 'Game', desc: 'JavaScript, Html, Scss',
        link: 'https://denysmakarov.github.io/New_CV_Game/dist/index.html',
        git: 'https://github.com/DenysMakarov/CV_FrontEnd_WRC'},
    {
        title: 'This Page', desc: 'TypeScript | React | MobX | Scss | AWS',
        link: 'https://denysmakarov.github.io/Old_React/dist/#/',
        git: 'https://github.com/DenysMakarov/New_CV_Game'
    },
]

interface LeftBlockProps {
    num?: number;
    setNum: (num: number) => void
}

const LeftBlock: FC = observer(() => {

    const switcher = useStore('workToggle')

    return (
        <div className="left-block">
            {titleObj.map((el, idx) => (
                <div key={el.title + idx} className="work"
                     onMouseOver={() => switcher.setCount(idx + 1)}

                     style={{animationDelay: '.' + idx + 's'}}
                >
                    <div className="number-block">
                        <div className='number'>{`0${idx + 1}`}</div>
                    </div>
                    <div className={'title-block'}>
                        <h1 className="title">{el.title}</h1>
                        <p className="desc">{el.desc}</p>
                    </div>
                    <button className='git-link'>Git</button>
                </div>
            ))}
        </div>
    )
})


export default LeftBlock;