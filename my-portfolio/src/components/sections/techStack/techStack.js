import React from 'react';
import { IconBrandReact, IconBrandCSharp, IconBrandJavascript, IconBrandTypescript, IconBrandPython, IconBrandNodejs,IconBrandMysql, IconBrandMongodb, IconStack2 } from '@tabler/icons-react';
import style from './techStack.module.css';
import flask from '../../../assets/svg/techStackIcons/flask.svg';
import aws from '../../../assets/svg/techStackIcons/aws.svg';
import docker from '../../../assets/svg/techStackIcons/docker.svg';
import git from '../../../assets/svg/techStackIcons/git.svg';
import nextjs from '../../../assets/svg/techStackIcons/nextjs.svg';
import classNames from 'classnames';

const TechStack = () => {
    const iconSize = '50';
    return (
        <div className={style.stackAlignment}>
                <p className='sectionHeader'><span><IconStack2 size={40} className={style.icon} /></span>My Stack</p>


            <div className={style.stackSection}>
            <br/>
                <p className={style.stackTitle}> FRONTEND</p>
                <span className={style.stack}>
                    <span className={style.stackIcon}>
                        <IconBrandReact size={iconSize} color="#61DAFB" />
                        <span className={style.stackText}>React</span>
                    </span>

                    <span className={style.stackIcon}>
                    <img src={nextjs} alt="nextjs" width={iconSize} height={iconSize} />
                        <span className={style.stackText}>NextJS</span>
                    </span>


                    <span className={style.stackIcon}>
                    <IconBrandTypescript size={iconSize} color="#007ACC" />
                        <span className={style.stackText}>TypeScript</span>
                    </span>
                
                </span>
            </div>


            <div className={style.stackSection}>
            <br/>
                <p className={style.stackTitle}> BACKEND</p>
                <span className={style.stack}>
                    <span className={style.stackIcon}>
                    <IconBrandCSharp size={iconSize} color="#239120" />
                        <span className={style.stackText}>C#</span>
                    </span>

                    <span className={style.stackIcon}>
                    <IconBrandNodejs size={iconSize} color="#8CC84B" />
                        <span className={style.stackText}>NodeJS</span>
                    </span>

                    <span className={style.stackIcon}>
                    <IconBrandMongodb size={iconSize} color="#47A248" />
                        <span className={style.stackText}>MongoDB</span>
                    </span>

                    <span className={style.stackIcon}>
                    <img width={iconSize} height={iconSize} src="https://img.icons8.com/cute-clipart/100/flask.png" alt="flask"/>                       
                    <span className={style.stackText}>Flask</span>
                    </span>
                </span>
            </div>

            <div className={style.stackSection}>
            <br/>
                <p className={style.stackTitle}> DATABASE</p>
                <span className={style.stack}>
                    <span className={style.stackIcon}>
                    <IconBrandMysql size={iconSize} color="#4479A1" />
                        <span className={style.stackText}>MySQL</span>
                    </span>


                    <span className={style.stackIcon}>

                        <img width={iconSize} height={iconSize} src="https://img.icons8.com/color/100/postgreesql.png" alt="postgreesql"/>
                        <span className={style.stackText}>PostgreSQL</span>
                    </span>


                    <span className={style.stackIcon}>
                        <img width={iconSize} height={iconSize} src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/100/external-postman-is-the-only-complete-api-development-environment-logo-shadow-tal-revivo.png" alt="external-postman-is-the-only-complete-api-development-environment-logo-shadow-tal-revivo"/>
                        <span className={style.stackText}>Postman</span>
                    </span>

                </span>
            </div>

            <div className={style.stackSection}>
            <br/>
                <p className={style.stackTitle}> TOOLS</p>
                <span className={style.stack}>
                    <span className={style.stackIcon}>
                        <img src={aws} alt="AWS" width={iconSize} height={iconSize} />
                        <span className={style.stackText}>AWS</span>

                                          
                    </span>
                   
                   
                    <span className={style.stackIcon}>
                    <img src={docker} alt="docker" width={iconSize} height={iconSize} />
                        <span className={style.stackText}>Docker</span>
                    </span>
                    <span className={style.stackIcon}>

                    <img src={git} alt="git" width={iconSize} height={iconSize} />
                        <span className={style.stackText}>Git</span>
                    </span>




                </span>
            </div>



        </div>
    );
};
export default TechStack;