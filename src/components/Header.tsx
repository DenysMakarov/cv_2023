import React, {useEffect, useRef, useState} from 'react';

interface SwitcherStyle {
    width?: number | undefined;
    bottom?: number | undefined;
    left?: number | undefined
}

const Header: React.FC = () => {
    const [title, setTitle] = useState<string>('PORTFOLIO');
    const [pos, setPos] = useState<SwitcherStyle>({width: 0, bottom: 0, left: 0});

    const res = title.split('').map((el) => el);
    const p = useRef<HTMLDivElement>(null);
    const a = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const res = title.split('').map((el) => el);
        if (res) {
            setPos({
                width: title === 'PORTFOLIO' ? p.current?.getBoundingClientRect().width : a.current?.getBoundingClientRect().width,
                bottom: title === 'PORTFOLIO' ? p.current?.getBoundingClientRect().bottom : a.current?.getBoundingClientRect().bottom,
                left: title === 'PORTFOLIO' ? p.current?.getBoundingClientRect().left : a.current?.getBoundingClientRect().left,

            });

        }
        // console.log(p.current?.getBoundingClientRect());
    }, [title]);

    return (
        <header className="App-header">
            <nav>
                <div ref={p} onClick={():void => setTitle('PORTFOLIO')}>Portfolio</div>
                <div ref={a} onClick={():void => setTitle('ABOUT.ME')}>About Me</div>
                <div
                    className="switcher"
                    style={{
                        width: `${pos.width}px`,
                        bottom: `${(pos.bottom ?? 0) -10}px`,
                        left: `${(pos.left ?? 0) - 120}px`,
                    }}
                />
            </nav>
            <div>
                {title.split('').map((w, i) => (
                    <h1 key={w + i}>{w}</h1>
                ))}
            </div>
        </header>
    );
};

export default Header;

