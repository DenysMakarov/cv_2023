import React, {FC, useEffect} from 'react';

interface TitleObj {
    title: string,
    desc: string
}

const titleObj: TitleObj[] = [
    {title: 'Event Ticket Store  |  Front-End', desc: 'React | Redux (Saga) | MobX | TypeScript | SCSS | Webpack'},
    {title: 'Event Ticket Store  |  Back-End', desc: 'Java, PostgresSql, Spring-Boot, Hibernate, JPA, Spring-Security, JWT'},
    {title: 'Sneakers store', desc: 'Node.js | Express | JavaScript | Handlebars | Jwt'},
    {title: 'Restaurant', desc: 'JavaScript | Scss | Html'},
    {title: 'Slider Library', desc: 'JavaScript | Html | CSS -> You can buy it on www.codester.com'},
    {title: 'Game', desc: 'JavaScript, Html, Scss'},
    {title: 'This Page', desc: 'TypeScript | React | MobX | Scss | AWS'},
]

interface LeftBlockProps {
    num?: number;
    setNum: (num: number) => void
}

const LeftBlock : FC<LeftBlockProps> = ({setNum}) => {

    return (
        <div className="left-block">
            {titleObj.map((el, idx) => (
                <div key={el.title + idx} className="work" onMouseOver={() => setNum(idx+1)}>
                    <div className="number-block">
                        <div className='number'>{`0${idx+1}`}</div>
                    </div>
                    <div className={'title-block'} >
                        <h1 className="title">{el.title}</h1>
                        <p className="desc">{el.desc}</p>
                    </div>
                    <button className='git-link'>Git</button>
                </div>
            ))}
        </div>
    );
};

export default LeftBlock;