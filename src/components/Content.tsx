import React, {FC, useEffect, useState} from 'react';
import LeftBlock from "./pages/portfolio/LeftBlock";
import RightBlock from "./pages/portfolio/RightBlock";
import {useStore} from "../hooks/useStore";
import {observer} from "mobx-react";
import DescSkills from "./pages/about/DescSkills";
import Picture from "./pages/about/Picture";


const Content: FC = observer(() => {
    const page = useStore('pageToggle')

    // useEffect(() => {
    //     console.log(page.page)
    // }, [page.page])

    return (
        <section className='content'>
            {
                page.page === 'PORTFOLIO' ?
                    <>
                        <LeftBlock/>
                        <RightBlock/>
                    </>
                    :
                    <>
                        <DescSkills/>
                        <Picture/>
                    </>

            }

        </section>
    )
})

export default Content;