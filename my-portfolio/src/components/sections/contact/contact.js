import React from 'react';
import style from './contact.module.css';
import gmailIcon from '../../../assets/images/techStackIcons/gmailIcon.webp'
import { IconBrandGithub } from '@tabler/icons-react';


const Contact = () => {
    return (
        <div className={style.contact}>
            <a href="https://www.linkedin.com/in/george-ramsay-901863257" target="_blank" rel="noopener noreferrer">
                <img align="left" alt="LinkedIn" width="30px" height="30px" src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" />
            </a>

            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=georgeramsay.personal@gmail.com" target="_blank" rel="noopener noreferrer">
                <img align="left" alt="Gmail"  height="30px" src={gmailIcon} />
            </a>
            <a href="https://github.com/GeorgeRamsay" target="_blank" rel="noopener noreferrer">
                <IconBrandGithub size={30} color="#FFFFFF" />
            </a>
        </div>
    );
}
export default Contact;