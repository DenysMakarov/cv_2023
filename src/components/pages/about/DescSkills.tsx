import React from 'react';


interface SkillsType{
    title: string,
    delay: number,
    issue: string
}

const skillsImgArr = [
    {title: 'javascript.png', delay: .3, issue: 'Javascript'},
    {title: 'mobx.png', delay: .3, issue: 'MobX'},
    {title: 'typescript2.png', delay: .35, issue: 'Typescript'},
    {title: 'css.png', delay: .6, issue: 'SCSS'},
    {title: 'aws.png', delay: .15, issue: 'AWS'},
    {title: 'bootstrap.png', delay: .33, issue: 'Bootstrap'},
    {title: 'docker.png', delay: .26, issue: 'Docker'},
    {title: 'firebase.png', delay: .88, issue: 'Firebase'},
    {title: 'git.png', delay: .52, issue: 'Git'},
    {title: 'handlbars2.png', delay: .72, issue: 'Handlbars'},
    {title: 'html.png', delay: .23, issue: 'HTML'},
    {title: 'ex.png', delay: .1, issue: 'Express.js'},
    {title: 'java.png', delay: .66, issue: 'Java'},
    {title: 'mongodb.png', delay: .5, issue: 'Mongodb'},
    {title: 'mysql.png', delay: .21, issue: 'MySql'},
    {title: 'node-js.png', delay: .87, issue: 'Node.js'},
    {title: 'npm.png', delay: .98, issue: 'Npm'},
    {title: 'postgresql.png', delay: .22, issue: 'PostgreSql'},
    {title: 'postman.png', delay: .9, issue: 'Postman'},
    {title: 'react.png', delay: .85, issue: 'React'},
    {title: 'redux.png', delay: .15, issue: 'Redux'},
    {title: 'sass.png', delay: .74, issue: 'SASS'},
    {title: 'sequelize.png', delay: .61, issue: 'Sequelize'},
    {title: 'slack.png', delay: .57, issue: 'Slack'},
    {title: 'spring.png', delay: .33, issue: 'Spring-Boot'},
    {title: 'ij.png', delay: .55, issue: 'IntellIj'},
    {title: 'sql-file.png', delay: .12, issue: 'SQL'},
    {title: 'webpack.png', delay: .2, issue: 'Webpak'},
    {title: 'vue.png', delay: .6, issue: 'Vue.js'},
]



const DescSkills = () => {

    const skills  = skillsImgArr.map((el) => {
        return {
            ...el,
            title: require(`../../../assest/img/skills/${el.title}`) ?? ' ',
        }
    } );

    const cv = require(`./denys_makarov_cv.pdf`)

    const downloadFile = () => {
        const url = cv;
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', '');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const showFile = () => {
        const url = cv;
        window.open(url, '_blank');
    }

    const downloadPdf = async (fileName:string) => {
        try {
            const response = await fetch('/.netlify/functions/download-pdf', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ fileName }),
            });
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', fileName);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='desc-box'>
            <h2>SKILLS</h2>
            <div className='skills'>
                {
                    skills.map((el, idx) => (
                        <div key={el.title + idx} className='skill' style={{
                            backgroundImage: `url(${el.title})`,
                            animationDelay: `${el.delay}s`
                        }}>
                            <div className='issue'>{el.issue}</div>
                        </div>
                    ))
                }
                <button onClick={showFile} className='other-skills'>Other Skills</button>
            </div>

            <button onClick={downloadFile} className='cv-download'>Download resume</button>
        </div>
    );
};

export default DescSkills;