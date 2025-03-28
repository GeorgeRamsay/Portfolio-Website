import style from './navBar.module.css'

export const NavBar =({}) => {



return(
    <div className={style.navBar}>
        <div className={style.navBar_item}>
            Work Experience
        </div>
        <div className={style.navBar_item}>
           Projects
        </div>
        <div className={style.navBar_item}>
           Personal Life
        </div>
    </div>


);
};