import React, {FC, useEffect, useRef, useState} from 'react';

import {AiOutlineSkype} from 'react-icons/ai';
import {FiMail} from 'react-icons/fi';
import {ImMobile} from 'react-icons/im';
import {IoLogoLinkedin} from 'react-icons/io';
import {AiFillFacebook} from 'react-icons/ai';
import {BiEnvelope} from 'react-icons/bi';


const Footer:FC = () => {

    const [info, SetInfo] = useState<string>('live:beae20f7dab8e21a')
    const [animation, setAnimation] = useState<string>('footer-desc-appear')

    useEffect(() => {
        setAnimation('')
        setTimeout(() => {
            setAnimation('footer-desc-appear')
        }, 10)
    }, [info])

    return (

        <>
            <p className='footer-info' style={{animationName: `${animation}`}}>{info}</p>

            <footer className='footer'>

                <div className="r-icon"><AiOutlineSkype className='icon'
                                                        onMouseOver={() => SetInfo('live:beae20f7dab8e21a')}
                                                        onClick={() => window.location.href = 'skype:live:beae20f7dab8e21a?call'}
                /></div>

                <div className="r-icon"><ImMobile className='icon'
                                                  onMouseOver={() => SetInfo('+18254377728')}
                                                  onClick={() => window.location.href = 'tel:+18254377728'}
                />
                </div>

                <div className="r-icon"><BiEnvelope className='icon'
                                                    onMouseOver={() => SetInfo('mdamywork@gmail.com')}
                                                    onClick={() => window.open('mailto:mdamywork@gmail.com')}

                /></div>

                <div className="r-icon"><IoLogoLinkedin className='icon'
                                                        onMouseOver={() => SetInfo('Go to Linkedin')}
                                                        onClick={() => window.location.href = 'https://www.linkedin.com/in/denys-makarov-4793a41ba'}

                />
                </div>
                <div className="r-icon"><AiFillFacebook className='icon'
                                                        onMouseOver={() => SetInfo('Go to Facebook')}
                                                        onClick={() => window.location.href = 'https://www.facebook.com/profile.php?id=100027481040177'}
                />
                </div>
                <p>2018 - Best wishes, Denys Makarov</p>

            </footer>
        </>

    );
};

export default Footer;