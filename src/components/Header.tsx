import React, {useEffect, useRef, useState} from 'react';

interface SwitcherStyle {
    width?: number | undefined;
    bottom?: number | undefined;
    left?: number | undefined
}


const Header: React.FC = () => {
    const [title, setTitle] = useState<string>('PORTFOLIO');
    const [pos, setPos] = useState<SwitcherStyle>({width: 0, bottom: 0, left: 0});
    const res = title.split('').map((el:string) => el);

    const p = useRef<HTMLDivElement>(null);
    const a = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (res) {
            setPos({
                width: title === 'PORTFOLIO' ? p.current?.getBoundingClientRect().width : a.current?.getBoundingClientRect().width,
                left: title === 'PORTFOLIO' ? (p.current?.getBoundingClientRect().left ?? 0) - (p.current?.getBoundingClientRect().left ?? 0) : (a.current?.getBoundingClientRect().left ?? 0) - (p.current?.getBoundingClientRect().left ?? 0),
            });
        }
    }, [title]);

    return (
        <header className="App-header">
            <nav className='navigation'>
                <div ref={p} onClick={():void => setTitle('PORTFOLIO')}>Portfolio</div>
                <div ref={a} onClick={():void => setTitle('ABOUT_ME')}>About Me</div>
                <div className="switcher" id='switcher'
                    style={{
                        width: `${pos.width}px`,
                        left: `${pos.left}px`,
                    }}
                />
            </nav>
            <div>
                {res.map((w, i) => (
                    <div key={w+i} className='word-wrapper'>
                        <h1 style={{
                            color: w==='_' ? 'transparent' : '#ffffff',
                            animationDelay: '.' + (i) + 's'
                        }} key={w + i}>{w}</h1>
                    </div>
                ))}
            </div>
        </header>
    );
};

export default Header;

