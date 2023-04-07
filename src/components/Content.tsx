import React, {FC, useState} from 'react';
import LeftBlock from "./LeftBlock";
import RightBlock from "./RightBlock";
import {observer} from "mobx-react";


const Content : FC= () => {
    return (
        <section className='content'>
            <LeftBlock />
            <RightBlock />
        </section>
    )
}

export default Content;